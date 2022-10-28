import React, { useState, useEffect } from "react";
import styled from "styled-components";
import profile from "../../../images/users/profile-face.png";
import star from "../../../images/other/star.jpg";
import { useNavigate } from "react-router";

// STYLED COMPONENTS -start

const Card_ = styled.div`
  border-top: 5px solid #e47d31;
  margin: 8px;
  width: 200px;
  background-color: white;
  .wrap {
    display: flex;
  }

  p {
    margin: 8px;
    font-size: 12px;
  }
  .star {
    width: 60%;
  }
  img {
    width: 60px;
  }
  .grey-btn {
    margin: 8px;
    display: flex;
    color: white;
    width: 170px;
    background-color: rgba(145, 145, 145, 0.6);
    padding: 8px 0 8px 0;
    border-radius: 20px;
    .login,
    .signup {
      margin: 0 16px 0 16px;
      font-size: 10px;
    }
    .line {
      border-right: 1px solid white;
      margin-top: -8px;
      margin-bottom: -8px;
    }
  }
  h5 {
    margin: 8px 0 0 8px;
    color: #e47d31;
  }
  h4 {
    margin: 8px;
    font-weight: 300;
  }
  .color-orange {
    color: #e47d31;
    font-weight: 900;
  }
`;

// STYLED COMPONENTS -end

const Card_review = (props) => {

  // fetching, logic, states

  const navigate = useNavigate()
  let localToken = JSON.parse(localStorage.getItem("luna-auth"))
  const [user, setUser] = useState()
  const [restaurant, setRestaurant] = useState()
  const [reviews, setReviews] = useState([])

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
    navigate(`/restaurantpage/${props.restaurant}/`)
  }

  useEffect((state) => {
    fetch(`https://team3luna.propulsion-learn.ch/api/users/${props.user}/`, getconfig)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));

    fetch(`https://team3luna.propulsion-learn.ch/api/restaurants/${props.restaurant}/`, getconfig)
      .then(response => response.json())
      .then(data => setRestaurant(data))
      .catch(error => console.log(error));

    fetch(`https://team3luna.propulsion-learn.ch/api/reviews/user/${props.user}/`, getconfig)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));
    
  },[])



  return (
    <Card_ onClick={goToUser}>
      <div className="wrap">
        <div className="img">
          <img src={user === undefined ? profile : user.avatar}></img>
        </div>
        <div class="subtitle">
          <h5>{user === undefined ? 'Loading...' : `${user.first_name} ${user.last_name}`}</h5>
          <p>{reviews === undefined ? 'Loading...' : reviews.length} review in total</p>
        </div>
      </div>
      <div class="subtitle">
        <h5>{restaurant === undefined ? 'Loading...' : restaurant.name}</h5>
        <p>
          {props.content}
        </p>
      </div>
      <div className="grey-btn">
        <a className="signup">Like 0</a>
        <a className="line"></a>
        <a className="login">Comment 0</a>
      </div>
    </Card_>
  );
};
export default Card_review;

/*

Mads I think this is not necessary as we didnt implement the comments/likes

      <div class="subtitle">
        <h4>Latest Comments</h4>
        <p className="color-orange">Colin Wirz</p>
        <p>Actually ahve no taste </p>
        <p className="color-orange">Cpolin Wirz</p>
        <p>Sorry Bro!</p>
      </div>
      
*/