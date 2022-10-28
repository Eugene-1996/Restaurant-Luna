import React, { useEffect, useState } from "react";
import styled from "styled-components";
import card1 from "../../../images/restaurants/card-1.jpg";
import star from "../../../images/other/star.jpg";
import { useNavigate } from "react-router";

// STYLED COMPONENTS -start

const Card_ = styled.div`
  border-top: 5px solid #e47d31;
  margin: 8px;
  width: 200px;
  background-color: white;
  p {
    margin: 8px;
    font-size: 12px;
  }
  .star {
    width: 60%;
  }
  .img img{
    width: 200px;
    height: 180px;
    object-fit: cover;
    
  }
  h5 {
    margin: 8px 8px 0 8px;
    font-weight: 500;
  }
`;

// STYLED COMPONENTS -end

const Card_restaurant = (props) => {

  // fetching, logic, states

  let localToken = JSON.parse(localStorage.getItem("luna-auth"))
  const navigate = useNavigate()
  const [rating, setRating] = useState('')

  const get = "GET"
  const header = new Headers({
    "Authorization": `Bearer ${localToken}`,
    "content-type": "application/json",
  })

  const getconfig = {
    method: get,
    headers: header
  }

  const goToUser = () => {
    navigate(`/restaurantpage/${props.id}/`)
  }

  useEffect((state) => {
    fetch(`https://team3luna.propulsion-learn.ch/api/reviews/rating/${props.id}/`, getconfig)
      .then(response => response.json())
      .then(data => setRating(data))
      .catch(error => console.log(error));
  },[])

  return (
    <Card_ onClick={goToUser}>
      <h5>{props.name}</h5>
      <p>{props.address} {rating}</p>
      <img className="star" src={star}></img>
      <div className="img">
        <img src={props.avatar}></img>
      </div>
    </Card_>
  );
};
export default Card_restaurant;
