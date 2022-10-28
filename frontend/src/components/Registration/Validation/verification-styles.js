import styled from "styled-components";

export const Verification_All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  background-color: #F2F2F2;
  width: 100wh;
  height: 100vh;
`;

export const Verification_string = styled.div`
  display: flex;
  width: 357px;
  height: 28px;
  font-family: Helvetica;
  display: flex;
  justify-content: center;
  // align-items: center;
  font-size: 24px;
  margin-top: 100px;
    width: 100%;
    p {
    color: #4C4C4C;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    border-bottom: 3px solid #E47D31;
    padding-bottom: 20px;
    weight: 900;
    }

`;


export const Verification_form = styled.form`
   
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(3, 1fr);
   gap: 2rem;
   margin-top: 80px;
   input{
   color: #979797;
   font-size: 20px;
   width: 300px;
   height: 30px;
   padding-left: 20px;
   }
`;

export const Finish_Registration_button = styled.button`
    background-color: #E47D31;
    place-self: center;
    grid-column: 1/3;
    border-radius: 28px;
    color: white;
    height: 56px;
    width: 259px;
    font-size: 20px;
    border-radius: 28px;
    border: none;
    font-weight: bolder;
`;