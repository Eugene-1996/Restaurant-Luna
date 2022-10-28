import React from "react";
import styled from "styled-components";
import profile from "../../../images/users/profile-face.png";
import card1 from "../../../images/restaurants/card-1.jpg";
import star from "../../../images/other/star.jpg";

// STYLED COMPONENTS -start

const Card_ = styled.div`
  margin: 8px;
  width: 400px;
  height: 100%;
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

const Card_edit_profile = () => {
  return (
    <Card_>
      <h2>EDIT USERPROFILE</h2>
      <h5>Läderach Chocolatier Suisse</h5>
      <h5>Input Field</h5>
      <h5>Input Field</h5>
      <h5>Input Field</h5>
      <h5>Input Field</h5>
      <h5>Input Field</h5>
      <h5>Input Field</h5>
      <h5>Input Field</h5>
      <h5>Input Field</h5>
    </Card_>
  );
};
export default Card_edit_profile;
