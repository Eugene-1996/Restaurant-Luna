import styled from "styled-components";
import Card_restaurant from "./Card_restaurant/index.js";
import Card_review from "./Card_reviews/index.js";
import Card_comments from "./Card_comments/index.js";
import Card_edit_profile from "./Card_edit_profile/index.js";
import Card_aboutinfo from "./Card_aboutinfo/index.js";
import React, { useState, useEffect } from "react";
import profile from "../../images/users/profile-face.png";
import cover from "../../images/covers/cover_profile.png";
import { useParams } from "react-router-dom";

// STYLED COMPONENTS -start
const Navbar = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: flex-start;
  span {
    margin: 4px 0 8px 0;
  }
  p {
    padding: 8px 32px 8px 32px;
    margin: 8px;
    border-bottom: 1px solid lightgrey;
    &:hover {
      border-left: 4px solid #e47d31;
      background-color: rgba(0, 0, 0, 0.0837013);
      transition: 0.1s all;
    }
    &:active {
      border-left: 4px solid #e47d31;
      background-color: rgba(0, 0, 0, 0.0837013);
      transition: 0.1s all;
    }
  }
  h4 {
    margin: 16px 0 8px 0;
  }
`;
const CardContainer = styled.div`
  width: 470px;
  display: flex;
  flex-wrap: wrap;
  background-color: #f2f2f2;
  padding-top: 26px;
`;
const ColumnWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1000px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
// STYLED COMPONENTS -end

const Userprofile = () => {
  
  let localToken = JSON.parse(localStorage.getItem("luna-auth"))

  const [active, setActive] = useState("Container_review");
  const [self, setSelf] = useState();
  const [reviews, setReviews] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const initialID = useParams().userID

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

    if ( initialID === undefined ) {

    fetch("https://team3luna.propulsion-learn.ch/api/me/", getconfig)
      .then(response => response.json())
      .then(data => setSelf(data))
      .catch(error => console.log(error));
      
    fetch("https://team3luna.propulsion-learn.ch/api/reviews/me/", getconfig)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));

    fetch("https://team3luna.propulsion-learn.ch/api/restaurants/me/", getconfig)
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.log(error));

    } else {

    fetch(`https://team3luna.propulsion-learn.ch/api/users/${initialID}/`, getconfig)
      .then(response => response.json())
      .then(data => setSelf(data))
      .catch(error => console.log(error));
      
    fetch(`https://team3luna.propulsion-learn.ch/api/reviews/user/${initialID}/`, getconfig)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));

    fetch(`https://team3luna.propulsion-learn.ch/api/restaurants/user/${initialID}/`, getconfig)
      .then(response => response.json())
      .then(data => {setRestaurants(data); console.log(data)})
      .catch(error => console.log(error));

    }

},[])

  return (
    <>
      <ImgWrapper>
        <img className="cover" src={self === undefined ? cover : self.cover}></img>
      </ImgWrapper>

      <ColumnWrapper>
        <Navbar>
          <h3>{self === undefined ? 'Loading...' : self.first_name} {self === undefined ? 'Loading...' : self.last_name}</h3>
          <span>{self === undefined ? 'Loading...' : self.location}</span>
          <span>{reviews === undefined ? 'Loading...' : reviews.length} Reviews</span>
          <span>0 Comments</span>
          <img className="profile" src={self === undefined ? profile : self.avatar}></img>
          <h4>{self === undefined ? 'Loading...' : self.first_name}'s Profile</h4>
          <p onClick={() => setActive("Container_review")}>Reviews</p>
          <p onClick={() => setActive("Container_comments")}>Comments</p>
          <p onClick={() => setActive("Container_restau")}>Restaurants</p>
          <p onClick={() => setActive("Container_edit_profile")}>
            Edit Profile
          </p>
        </Navbar>
        <CardContainer>
          {/* TODO:Map fetched data over these 4 card-types and maybe pass in props */}
          {active == "Container_review" && reviews.map(element => <Card_review
          content={element.content}
          restaurant={element.restaurant}
          test={element}
        />)}

          {active == "Container_comments" && <Card_comments />}
          
          {active == "Container_restau" && restaurants.map(element => <Card_restaurant 
          id = {element.id}
          owner_first = {self === undefined ? 'Loading...' : self.first_name}
          owner_last = {self === undefined ? 'Loading...' : self.last_name}
          name = {element.name}
          category = {element.category}
          country = {element.country}
          open = {element.opening_hours}
          phone = {element.phone}
          price = {element.price_level}
          />)}

          {active == "Container_edit_profile" && <Card_edit_profile />}
        </CardContainer>
        <CardContainer>
          <Card_aboutinfo 
          first_name={self === undefined ? 'Loading...' : self.first_name}
          last_name={self === undefined ? 'Loading...' : self.last_name}
          description={self === undefined ? 'Loading...' : self.description}
          location={self === undefined ? 'Loading...' : self.location}
          things_i_love={self === undefined ? 'Loading...' : self.things_i_love}
          created={self === undefined ? 'Loading...' : self.date_joined} />
        </CardContainer>
      </ColumnWrapper>
    </>
  );
};

export default Userprofile;

/*
owner_first = {self === undefined ? 'Loading...' : self.first_name}
          owner_last = {self === undefined ? 'Loading...' : self.last_name}
          */