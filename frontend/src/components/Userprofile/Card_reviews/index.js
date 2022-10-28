import React from "react";
import styled from "styled-components";
import profile from "../../../images/users/profile-face.png";
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

const Card_review = (props) => {

  const [restaurant, setRestaurant] = useState()

  let localToken = JSON.parse(localStorage.getItem("luna-auth"))
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
    fetch(`https://team3luna.propulsion-learn.ch/api/restaurants/${props.restaurant}/`, getconfig)
      .then(response => response.json())
      .then(data => setRestaurant(data))
      .catch(error => console.log(error));
  },[])

  return (
    <Card_>
      <h2>REVIEW</h2>
      <h5>{restaurant === undefined ? 'Loading...' : restaurant.name}</h5>
      <p>{props.content}</p>
      <p>User gave this restaurant a rating of {props.test.rating} out of 5.</p>
    </Card_>
  );
};
export default Card_review;
