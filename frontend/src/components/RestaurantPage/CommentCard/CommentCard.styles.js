import styled from "styled-components";

export const CommentCardTop = styled.div`
display: flex;
width: 45vw;
height: 50px;
align-items: center;
justify-content: flex-start;
margin-top: 10px;
background-color: #fff;
border-bottom: 1.5px solid #d8d8d8;
`;

export const CommentCardMiddle = styled.div`
display: flex;
flex-direction: column;
width: 45vw;
align-items: flex-start;
justify-content: flex-start;
background-color: #fff;
padding-bottom: 6px;
border-radius: 5px;


span, a {
  margin-left: 5px;
  margin-right: 5px;
}

.like-comment {
margin-left: 5px;
font-size: 12px;
display: flex;
color: white;
background-color: #bdbdbd;
border-radius: 20px;
height: 22px;
align-items: center;
justify-content: center;
min-width: 180px;
:hover {
  cursor: pointer;
}
    }

.line {
height: 100%;
width: 1px;
border-right: 1px solid white;
}

.thumb {
  height: 14px;
}

.comment-text {
  width: 43.8vw;
  font-size: 12px;
  margin-bottom: 5px;
  margin-left: 5px;
}

.view-all-comments {
display: flex;
align-self: center;
font-size: 12px;
font-weight: 700;
color: #e47d31;
:hover {
  cursor: pointer;
  text-decoration: underline;
}
}
`;


export const CommentCardEnd = styled.div`
display: flex;
flex-direction: column;
width: 45vw;
background-color: #fff;
padding-bottom: 6px;
border-radius: 5px;
border-top: 1.5px solid #d8d8d8;

span {
  margin-top: 3px;
}
`;


export const FlexPerson = styled.div`
display: flex;
width: 45vw;
height: 50px;
align-items: center;
justify-content: space-between;

img {
  height: 50px;
  width: 45px;
  object-fit: cover;
  margin-right: 3px;
  :hover {
    cursor: pointer;
  }
}


.name {
font-size: 15px;
color: #e47d31;
font-weight: 700;
margin-bottom: 3px;
  :hover {
  cursor: pointer;
  }
}

.reviews-total {
font-size: 10px;
font-weight: 700;
}

.star {
    width: 23px;
    height: auto;
/*     opacity: 0.07; */
}

.date-time {
  margin-top: 5px;
  margin-right: 5px;
  display: flex;
  font-size: 9px;
  align-self: flex-start;
}
`;


export const ColumnPerson= styled.div`
display: flex;
flex-direction: column;
min-width: 105px;
padding-right: 10px;
justify-content: center;
`;

export const FlexCardMiddle= styled.div`
width: 45vw;
display: flex;
justify-content: space-between;

.post-input {
  display: flex;

  input {
    margin-left: 5px;
    width: 24vw;
    height: 22px;
    border: 2px solid #f5f5f5;
    padding-left: 5px;
    padding-right: 5px;
    :focus {
      outline: none;
    }
  }
  button {
    color: white;
    width: 80px;
    height: 24px;
    border: none;
    border-radius: 20px;
    background-color: #e47d31;
    font-size: 12px;
    font-weight: 700;
    margin-left: 5px;
  }
}
`;

export const Flex= styled.div`
display: flex;
`;
