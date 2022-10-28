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

const Card_comments = () => {
  return (
    <Card_>
      <h2>COMMENTS</h2>
      <p>
        This user has not yet commented on any reviews.
      </p>
    </Card_>
  );
};
export default Card_comments;
