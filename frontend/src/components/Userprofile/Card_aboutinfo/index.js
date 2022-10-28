import React from "react";
import styled from "styled-components";
import profile from "../../../images/users/profile-face.png";
import card1 from "../../../images/restaurants/card-1.jpg";
import star from "../../../images/other/star.jpg";

// STYLED COMPONENTS -start

const Card_ = styled.div`
  margin: 8px;
  width: 300px;
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

const Card_aboutinfo = (props) => {
  return (
    <Card_>
      <div className="wrap">
        <div class="subtitle">
          <h5>ABOUT {props.first_name} {props.last_name}</h5>
        </div>
      </div>
      <div class="subtitle">
        <h5>Location</h5>
        <p>
        {props.location}
        </p>
        <h5>Luna member since</h5>
        <p>
        {props.created}
        </p>
        <h5>Things I love</h5>
        <p>
        {props.things_i_love}
        </p>
        <h5>Description</h5>
        <p>
        {props.description}
        </p>
      </div>
    </Card_>
  );
};
export default Card_aboutinfo;
