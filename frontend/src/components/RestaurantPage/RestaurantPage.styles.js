import styled from "styled-components";

// STYLED COMPONENTS -start

export const Page = styled.section`
display: flex;
flex-direction: column;
/* * {
  border: 0.2px solid blue;
}  */
`;

export const MainSection = styled.section`
display: flex;
width: 100vw;
justify-content: center;
background-color: #f8f8f8;
`;

export const Information = styled.div`
display: flex;
width: 80vw;
height: 10px;
min-height: 500px;
`;

export const FilterInput = styled.input`
display: flex;
width: 36vw;
height: 25px;
border: 2px solid #f5f5f5;
padding-left: 5px;
padding-right: 5px;
:focus {
  outline: none;
}
`;

export const FlexInputFilterForm = styled.form`
display: flex;
height: 50px;
align-items: center;
justify-content: space-between;
`;

export const FilterButton = styled.button`
color: white;
display: flex;
width: 100px;
height: 28px;
justify-content: center;
align-items: center;
margin-left: 2vw;
border-radius: 20px;
background-color: #e47d31;
border: none;
font-weight: 700;
:hover {
  cursor: pointer;
}
`;

export const Flex= styled.div`
display: flex;
`;

export const ColumnLeft= styled.div`
display: flex;
flex-direction: column;
width: 45vw;
margin-right: 2vw;
`;

export const ColumnRight= styled.div`
display: flex;
flex-direction: column;
width: 31vw;
/* padding-left: 1vw;
padding-right: 1vw; */
padding-top: 5px;
background-color: #f5f5f5;
`;

export const FlexOpeningHours = styled.div`
display: flex;
width: 31vw;
height: 34px;
align-items: center;
border-bottom: 1.5px solid #d8d8d8;

.clock {
  display: flex;
  width: 20px;
  height: auto;
  align-items: center;
  margin-left: 1vw;
}

span {
  display: flex;
  font-size: 12px;
  margin-left: 1vw;
  height: 20px;
  align-items: center;
}

`;
export const FlexPriceLevel = styled.div`
display: flex;
width: 31vw;
height: 34px;
align-items: center;


.cash {
  display: flex;
  width: 20px;
  height: auto;
  align-items: center;
  margin-left: 1vw;
}

span {
  display: flex;
  font-size: 12px;
  margin-left: 1vw;
  height: 20px;
  align-items: center;
}

`;

export const FlexButtons = styled.div`
display: flex;
width: 31vw;
height: 34px;
align-items: center;
justify-content: space-between;

button {
  color: white;
display: flex;
width: 140px;
height: 28px;
justify-content: center;
align-items: center;
border-radius: 20px;
background-color: #e47d31;
border: none;
font-size: 12px;
margin-left: 1vw;
margin-right: 1vw;
margin-top: 10px;
font-weight: 700;
:hover {
  cursor: pointer;
}
}
`;


export const FlexCardEnd= styled.div`
display: flex;
justify-content: space-between;

div {
  font-size: 12px;
  color: #e47d31;
  font-weight: 700;
  margin-left: 5px;
}

span {
  font-size: 9px;
  margin-right: 5px;
}
`;

export const CommentText2= styled.div`
  width: 43.8vw;
  font-size: 12px;
  margin-left: 5px;
`;


// STYLED COMPONENTS -end
