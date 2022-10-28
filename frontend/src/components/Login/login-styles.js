import styled from "styled-components";


export const Login_All = styled.div`
  width: 100wh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


export const Login_string = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
    font-size: 24px;
    font-family: Helvetica;
    font-style: normal;
    width: 100%;
    p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    border-bottom: 3px solid #E47D31;
    padding-bottom: 20px;
    weight: 900;
    }
    
`;


export const Login_form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
  input{
  height: 52px;
  width: 340px;
  color: #979797;
  border-radius: 3px;
  border: none;
  display: flex;
  padding-left: 10px;
`;


// export const Login_button = styled.div`
//   display: flex;
//   margin: 50px;
//   justify-content: center;
//   color: white;
//   background-color: #E47D31;
//   width: 200px;
//   height: 56px;
//   weight: 400;
//   align-items: center;
//   border-radius: 28px;
//   font-family: Helvetica;
// `;


export const Login_button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border-radius: 28px;
  color: white;
  background-color: #E47D31;
  border: none;
  font-size: 20px;
  margin-top: 50px;
  font-size: 16px;
  font-weight: bolder;
`;