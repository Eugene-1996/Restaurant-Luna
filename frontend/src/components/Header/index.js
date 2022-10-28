import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../images/icons/svgs/logo_luna.svg";

// STYLED COMPONENTS -start

const HeaderComponent = styled.div`
  display: flex;
  background-color: white;
  position: fixed;
  width: 100%;
  box-shadow: -6px -6px 13px 0px;
  height: 42px;
  a {
    font-size: 12px;
  }
  img {
    height: 14px;
    margin: 16px;
  }
  .left-nav {
    display: flex;
    align-items: center;
  }
  .right-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 16px;
    .orange {
      display: flex;
      color: white;
      background-color: #e47d31;
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
    .plain {
      padding: 8px;
      color: black;
      margin-right: 32px;
    }
  }
`;

// STYLED COMPONENTS -end

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <HeaderComponent>
        <div className="left-nav">
          <img src={logo}></img>
        </div>
        <div className="right-nav">
          <a
            className="plain"
            onClick={() => {
              navigate("../");
            }}
          >
            Home
          </a>
          <a
            className="plain"
            onClick={() => {
              navigate("../restaurants");
            }}
          >
            Search
          </a>
          <a
            className="plain"
            onClick={() => {
              navigate("../userprofile");
            }}
          >
            Profile
          </a>
          <div className="orange">
            <a className="signup" onClick={() => navigate('/registration_main/registration/')}>SIGNUP</a>
            <a className="line"></a>
            <a className="login" onClick={() => navigate('/login/')}>LOGIN</a>
          </div>
        </div>
      </HeaderComponent>
    </>
  );
};
export default Header;
