import styled from 'styled-components';

// STYLED COMPONENTS -start

export const HeaderComponent = styled.section`
margin-top: 42px;
width: 100vw;
max-height: 340px;
display: grid;
//border: 1px solid white;
`;

export const BackgroundImage = styled.img`
width: 100%;
max-height: 340px;
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
/*     opacity: 0.5; */
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

// STYLED COMPONENTS -end