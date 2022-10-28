import { useEffect, useState } from "react";
import styled from "styled-components";
import Card_user from "../Card_users/index.js";
import profile from "../../../images/users/profile-face.png";
import card1 from "../../../images/restaurants/card-1.jpg";
import star from "../../../images/other/star.jpg";

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

const CardContainer = styled.div`
  width: 870px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #f2f2f2;
  padding-top: 26px;
`;


// STYLED COMPONENTS -end

const Card_users = (props) => {

  const [users, setUsers] = useState([])

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
    fetch("https://team3luna.propulsion-learn.ch/api/users/list", getconfig)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  },[])

  return (
    <CardContainer>
        {users.map(element => <Card_user 
          id={element.id}
          avatar={element.avatar}
          first_name={element.first_name}
          last_name={element.last_name}
          description={element.description}
        />)}
    </CardContainer>
  );
};
export default Card_users;
