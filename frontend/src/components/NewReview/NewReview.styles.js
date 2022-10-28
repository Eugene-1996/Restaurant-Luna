import styled from 'styled-components';

// STYLED COMPONENTS -start

export const Page = styled.section`
display: flex;
flex-direction: column;
/* * {
    border: 0.5px solid blue;
} */
`;


export const HeaderComponent = styled.section`
padding-top: 42px;
width: 100vw;
max-height: 120px;
display: grid;
/* * {
    border: 0.2px solid blue;
} */
//border: 1px solid white;
`;

export const BackgroundImage = styled.img`
width: 100%;
max-height: 120px;
object-fit: cover;
z-index: 1;
grid-column: 1;
grid-row: 1;
`;

export const Overlay = styled.div`
grid-column: 1;
grid-row: 1;
width: 100%;
height: 120px;
z-index: 2;
background-color: black;
grid-column: 1;
grid-row: 1;
opacity: 0.5;
display: flex;
flex-direction: column;

`;

export const Information = styled.div`
color: white;
opacity: 1;
z-index: 3;
grid-column: 1;
grid-row: 1;
margin-left: 8vw;
margin-top: 16px;

div {
    color: white;
    font-size: 17px;
    font-weight: 500;
}

img {
    width: 18px;
    height: auto;
    margin-left: -3px;
}

.restaurant-type {
    color: white;

    margin-top: 4px;
    font-size: 14px;
    margin-bottom: 4px;
}
.review {
    color: white;
    opacity: 0.6;
    font-size: 12px;
    align-items: center;
}
.star {
    width: 20px;
    height: auto;
    opacity: 0.5;
}
.review-number {
    color: white;
    opacity: 0.6;
    font-size: 12px;
    align-items: center;
    margin-left: 10px;
    margin-right: 4px;
}
`;

export const Flex = styled.div`
display: flex;
align-items: center;
`;

export const StarWrapper = styled.div`
display: flex;
align-items: center;
`;

export const SelectRating = styled.div`
display: flex;
width: 57.5vw;
height: 50px;
align-items: center;
justify-content: flex-start;
margin-left: 2.5vw;


.star-rating {
    width: 4vw;
    height: auto;
    opacity: 0.07;
}

div {
    font-size: 13px;
    color: #7e7e7e;
    margin-left: 7px;
}
`;

export const Main= styled.section`
width: 60vw;
height: 450px;
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
* {
    border: 1px solid blue;
}

form {
    width: 60vw;
}
`;

export const InputText= styled.textarea`
width: 60vw;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
border: 2px solid #eaeaea;
resize: none;
padding: 15px;
box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;

:focus {
    outline: none;
}
::placeholder {
    font-size: 15px;
    color: #bbb7b7;
    word-spacing: -4px;
    letter-spacing: -1px;
}
`;

export const DivButton = styled.div`
display: flex;
align-items: center;
width: 60vw;
justify-content: flex-end;

button {
display: flex;
width: 120px;
height: 36px;
justify-content: center;
align-items: center;
justify-self: flex-end;
border-radius: 20px;
background-color: #e47d31;
border: none;
margin-top: 6px;
:hover {
  cursor: pointer;
}
}

`;


// STYLED COMPONENTS -end