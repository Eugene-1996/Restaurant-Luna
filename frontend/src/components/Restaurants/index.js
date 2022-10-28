import { useEffect, useState } from "react";
import styled from "styled-components";
import card1 from "../../images/restaurants/card-1.jpg";
import card2 from "../../images/restaurants/card-2.jpg";
import card3 from "../../images/restaurants/card-3.jpg";
import card4 from "../../images/restaurants/card-4.jpg";
import Card_restaurant from "./Card_restaurant/index.js";
import Card_review from "./Card_reviews/index.js";
import Card_user from "./Card_users/index.js";
import Card_restaurant_wrap from "./Card_restaurant_wrap/index.js";
import Card_review_wrap from "./Card_reviews_wrap/index.js";
import Card_user_wrap from "./Card_users_wrap/index.js";

// STYLED COMPONENTS -start

const CardContainer = styled.div`
  width: 870px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #f2f2f2;
  padding-top: 26px;
`;

const Navbar = styled.div`
  margin: 0 auto;
  padding-top: 96px;
  display: flex;
  justify-content: center;
  p {
    padding: 8px 32px 8px 32px;
    margin: 8px;
    border-bottom: 1px solid lightgrey;
    &:hover {
      border-bottom: 4px solid #e47d31;
      margin-bottom: 4px;
      transition: 0.1s all;
    }
  }
`;

// STYLED COMPONENTS -end

const Restaurants = () => {

  // fetching, logic, states

  const [active, setActive] = useState("Container_restau");
  const [restaurants, setRestaurants] = useState([])

  return (
    <>
      <Navbar>
        <p onClick={() => setActive("Container_restau")}>Restaurants</p>
        <p onClick={() => setActive("Container_review")}>Reviews</p>
        <p onClick={() => setActive("Container_users")}>Users</p>     
      </Navbar>
      <CardContainer>
        {active == "Container_restau" && <Card_restaurant_wrap />} 
        {active == "Container_review" && <Card_review_wrap />}
        {active == "Container_users" && <Card_user_wrap />}
      </CardContainer>
    </>
  );
};
export default Restaurants;
