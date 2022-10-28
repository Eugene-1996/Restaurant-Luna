import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card_restaurant from "../Card_restaurant/index.js";
import card1 from "../../../images/restaurants/card-1.jpg";
import star from "../../../images/other/star.jpg";

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
  img {
    width: 100%;
  }
  h5 {
    margin: 8px 8px 0 8px;
    font-weight: 500;
  }
`;

const CardContainer = styled.div`
  width: 870px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #f2f2f2;
  padding-top: 26px;
`;

// STYLED COMPONENTS -end

const Card_restaurant_wrap = (props) => {

  // fetching, logic, states

  let localToken = JSON.parse(localStorage.getItem("luna-auth"))
  const [restaurants, setRestaurants] = useState([])

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
    fetch("https://team3luna.propulsion-learn.ch/api/restaurants/", getconfig)
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.log(error));
    },[])
      

  return (
    <CardContainer>
      {restaurants.map(element => <Card_restaurant
        id={element.id}
        name={element.name}
        address={element.country}
        avatar={element.image}
      />)}
    </CardContainer>
  );
};
export default Card_restaurant_wrap;
