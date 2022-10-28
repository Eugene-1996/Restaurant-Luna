import styled from "styled-components";
import background1 from "../../images/covers/cover_1.png"
import { BackgroundArea } from "./home.styles";
import React from 'react'
import SearchBar from "./search2";
import { SearchBarconf, HeaderComponent, BackgroundImage } from "./home.styles";
import { Titlebestrated } from "./home.styles";
import { CardsHome } from "./home.styles";
import Card_restaurant from "../Restaurants/Card_restaurant";
import { useEffect, useState } from "react";





// STYLED COMPONENTS -start

// const ExampleComponent = styled.div`
//   border: 1px solid green;
//   width: 100%;
//   height: 351px;
//   background-image: url(${background1});

// `;

// STYLED COMPONENTS -end

{/* <ExampleComponent src={background1} alt="Background"/> */ }

const Home = () => {

  let localToken = JSON.parse(localStorage.getItem("luna-auth"))
  const [restaurants, setRestaurants] = useState([])
  const [headersearch, setHeadersearch] = useState([])

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
    fetch("https://team3luna.propulsion-learn.ch/api/restaurants/", getconfig)
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.log(error));
  }, [])

  // console.log(restaurants)


  return (
    <>
      <HeaderComponent>
        <BackgroundImage src={background1} alt="Restaurant Image" />

        <SearchBar poop={setHeadersearch} />

      </HeaderComponent>


      <Titlebestrated>
        <p>
          BEST RATED RESTAURANTS
        </p>
      </Titlebestrated>
      <CardsHome>
        {headersearch.length === 0 ?

          restaurants.slice(0, 4).map(element => <Card_restaurant
            id={element.id}
            name={element.name}
            address={element.country}
            avatar={element.image}
          />)

          :

          headersearch.map(element => <Card_restaurant
            id={element.id}
            name={element.name}
            address={element.country}
            avatar={element.image}
          />)}

      </CardsHome>
    </>
  );
};
export default Home;
