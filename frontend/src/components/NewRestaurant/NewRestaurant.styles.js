import styled from "styled-components";


// STYLED COMPONENTS -start

export const PageForm = styled.form`
/*   * {
    border: 1px solid green;
  } */
padding-top: 42px;
padding-left: 5vw;
padding-right: 5vw;
width: 100vw;
height: 600px;
justify-content: center;
box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;

display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 0.4fr 0.1fr 1fr 0.1fr 1fr 0.1fr 1fr 0.1fr 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;

input {
  width: 27vw;
  height: 25px;
  margin-top: 5px;
  border: 1.5px solid #ebebeb;
  :focus {
    outline: none;
  }
}

select {
  color: #d8d8d8;
  width: 27vw;
  height: 28px;
  margin-top: 5px;
  border: 1.5px solid #ebebeb;
  :focus {
    outline: none;
  }
}

input[type="file"] {
    display: none;
}

div {
  display: flex;
  flex-direction: column;
}

.default-select {

}

.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    margin-top: 5px;
    background-color: #e47d31;
    border-radius: 20px;
    width: 16vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 11px;
    font-weight: 400;
    color: white;
}

.file-upload-div {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 12px;
  color: #979797;
  font-weight: 800;
}

.submit-button {
color: white;
font-weight: 700;
display: flex;
grid-column: 1 / 4;
justify-self: center;
width: 120px;
height: 36px;
justify-content: center;
align-items: center;
border-radius: 20px;
background-color: #e47d31;
border: none;
:hover {
  cursor: pointer;
}
}

.main-title {
  display: flex;
  flex-direction: column;
  grid-column: 1 / 4;
  font-weight: 600;
  justify-self: center;
  align-self: center;
  height: 30px;
  width: 226px;
  margin-top: 30px;
}

.basic {
  display: flex;
  grid-column: 1 / 4;
  align-self: flex-end;
  font-weight: 600;
  font-size: 14px;
  height: 20px;
}

.line {
  margin-top: 6px;
  align-self: center;
  width: 150px;/* 225px; */
  height: 1px;
  border-bottom: 2px solid #e47d31;
}
`;



// STYLED COMPONENTS -end