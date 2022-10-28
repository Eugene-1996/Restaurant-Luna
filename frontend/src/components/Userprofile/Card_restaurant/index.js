import React from "react";
import styled from "styled-components";
import card1 from "../../../images/restaurants/card-1.jpg";
import star from "../../../images/other/star.jpg";
import { useState, useEffect } from "react";

// STYLED COMPONENTS -start

const Card_ = styled.div`
  margin: 8px;
  width: 400px;
  background-color: white;
  p {
    margin: 8px;
    font-size: 12px;
  }
  .star {
    width: 30%;
  }
  img {
    width: 100%;
  }
  h5,
  h2 {
    margin: 8px 8px 0 8px;
    font-weight: 500;
  }
`;

// STYLED COMPONENTS -end

const Card_restaurant = (props) => {

  let localToken = JSON.parse(localStorage.getItem("luna-auth"))
  const [rating, setRating] = useState()
  const dollah = '$'

  const get = "GET"
  const header = new Headers({
    "Authorization": `Bearer ${localToken}`,
    "content-type": "application/json",
  })

  const getconfig = {
    method: get,
    headers: header
  }

useEffect((state) => {
    fetch(`https://team3luna.propulsion-learn.ch/api/reviews/rating/${props.id}/`, getconfig)
      .then(response => response.json())
      .then(data => setRating(data))
      .catch(error => console.log(error));
  },[])


  return (
    <Card_>
      <h2>{props.name}</h2>
      <h5>{dollah.repeat(props.price)}</h5>
      <p>
        {props.owner_first} {props.owner_last}'s {props.category} restaurant '{props.name}' can be found
        in {props.country} and has a user rating of {Math.round(rating*2)/2}. They are open {props.open}. Call {props.phone} to make a reservation
      </p>
    </Card_>
  );
};
export default Card_restaurant;

/*
<img className="star" src={star}></img>
*/