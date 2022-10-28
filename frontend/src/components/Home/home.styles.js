import styled from 'styled-components';
import background1 from "../../images/covers/cover_1.png"

// Welcome to the home styling js page.

export const BackgroundArea = styled.div`
display: flex;
justify-content: center;
border: 1px solid green;
width: 100%;
height: 351px;
background-image: url(${background1});
/* background-repeat: repeat-x; */
/* background-size: cover; */
/* position: fixed;
right: 100px;
left: 100px;  */

`;

export const SearchBarconf = styled.div`
/* padding-left:500px; */
display: flex;
/* justify-content: center; */
align-content:center; 
margin-top: 11%;

`;


export const Input = styled.input`
display: flex;
width: 520px;
margin-right: 21px;
height: 54px;
font-size: 16px;
line-height: 4;
background-color: white;
/* width: 72%; */
/* margin-left: ${props => (props.barOpened ? "1rem" : "0rem")}; */
border-radius: 3px;
border: none;
color: grey;
/* transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1); */


&:focus,
&:active {
  outline: none;
}
&::placeholder {
  color: grey;
}
`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
grid-column: 1;
grid-row: 1;
/* justify-content: space-between; */
/* align-items: center; */
width: 100vw;
/* height: ; */
/* position: absolute; */
/* left: 300px;
right: 0px;
top: 150px; */

`;

export const Button = styled.button`
height: 58px;
width: 203px;
left: 0px;
top: 0px;
border-radius: 28px;
border-color: beige;
background: #E47D31

`;


export const FontButton = styled.p`

font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
/* identical to box height */

text-align: center;

color: #FFFFFF;

`;


export const Titlebestrated = styled.div`
display: flex;
justify-content: center;

margin-top: 20px;

p {
  font-family: Helvetica;
font-size: 24px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0px;
text-align: center;
border-bottom: 3px solid #E47D31;
/* position: absolute; */

  }

`;

export const CardsHome = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;

`;

export const HeaderComponent = styled.section`
/* * {
  border: 1px solid blue;
} */
padding-top: 42px;
width: 100vw;
height: 340px;
display: grid;
//border: 1px solid white;
`;

export const BackgroundImage = styled.img`
width: 100%;
height: 340px;
object-fit: cover;
z-index: 1;
grid-column: 1;
grid-row: 1;
`;
