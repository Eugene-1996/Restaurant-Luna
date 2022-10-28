import RestaurantHeader from "./RestaurantHeader"
import CommentCard from "./CommentCard"
import { ReactComponent as Clock } from "../../images/icons/svgs/clock.svg"
import { ReactComponent as Money } from "../../images/icons/svgs/money.svg"
import React, { useState, useEffect, useRef } from 'react';
import { Page, MainSection, Information, Flex, ColumnLeft, FlexInputFilterForm, FilterInput, FilterButton, ColumnRight, FlexOpeningHours, FlexPriceLevel, FlexButtons } from "./RestaurantPage.styles"
import { useNavigate, useParams } from "react-router-dom";



const RestaurantPage = () => {

  let localToken = JSON.parse(localStorage.getItem("luna-auth"))
  const [rating, setRating] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [isowner, setIsowner] = useState()
  const [self, setSelf] = useState()
  const someVariable = useParams().ID
  const navigate = useNavigate()

  const method = "GET"
  const headers = new Headers({
    "Authorization": `Bearer ${localToken}`,
    'content-type': 'application/json'
  })

  const config = {
    method: method,
    headers: headers,
  }

  useEffect((state) => {
    
    fetch(`https://team3luna.propulsion-learn.ch/api/reviews/rating/${someVariable}/`, config)
      .then(response => response.json())
      .then((data) => setRating(data))
      .catch(error => console.log(error));

    fetch(`https://team3luna.propulsion-learn.ch/api/restaurants/${someVariable}/`, config)
      .then(response => response.json())
      .then((data) => {setRestaurant(data); setIsowner(data.user)})
      .catch(error => console.log(error));

    fetch(`https://team3luna.propulsion-learn.ch/api/reviews/restaurant/${someVariable}/`, config)
      .then(response => response.json())
      .then((data) => setReviews(data))
      .catch(error => console.log(error));

    fetch("https://team3luna.propulsion-learn.ch/api/users/list/", config)
      .then(response => response.json())
      .then((data) => setUsers(data))
      .catch(error => console.log(error));

    fetch("https://team3luna.propulsion-learn.ch/api/me/", config)
      .then(res => res.json())
      .then(data => setSelf(data.id))
      .catch(error => console.log(error));
    
  }, [])

  const goToReview = () => {
    navigate('/newreview/')
  }

  const goToData = () => {
    navigate('/newrestaurant/')
  }

  return (
    <Page>
      <RestaurantHeader

        name={restaurant.name}
        image={restaurant.image}
        category={restaurant.category}
        key={restaurant.id}
        rating={rating === undefined ? 'Loading...' : Math.floor(rating)}
        reviewsN={reviews.length} />

      <MainSection>
        <Information>


          <Flex>

            <ColumnLeft>

              <FlexInputFilterForm /* onSubmit={handleSubmit} */ /* id="headersearch" ref={form} */>
                <FilterInput
                  /*                       onChange={(e) => setInput(e.target.value)}
                                        type="text"
                                        form="headersearch"
                                        name="headersearch"  */
                  placeholder="Filter list..." />
                <FilterButton>FILTER</FilterButton>
              </FlexInputFilterForm>
              {reviews.map((review, i) => (
                <CommentCard
                  id={review.id}
                  content={review.content}
                  rating={review.rating}
                  created={review.created.replace(/T/, ' ')}
                  user={review.user}
                  restaurant={review.restaurant}
                  likes={review.likes}
                  users={users}
                />
              ))}

            </ColumnLeft>


            <ColumnRight>

              <FlexOpeningHours>
                <Clock className="clock" />
                <span>{restaurant.opening_hours}</span>
              </FlexOpeningHours>

              <FlexPriceLevel>
                <Money className="cash" />
                <span>Price level:</span>
                <span>
                  {"$".repeat(restaurant.price_level)}{/* /4 */}
                  {/*                     {level1 === '' ? '' : level1}
                    {level2 === '' ? '' : level2}
                    {level3 === '' ? '' : level3}
                    {level4 === '' ? '' : level4} */}
                </span>
              </FlexPriceLevel>

              <FlexButtons>
                <button onClick={goToReview}>WRITE A REVIEW</button>
                {isowner === self ? <button onClick={goToData}>EDIT DATA</button> : ""}                
              </FlexButtons>

            </ColumnRight>

          </Flex>


        </Information>
      </MainSection>
    </Page>
  );

};
export default RestaurantPage;

/*   const [headersearch, setHeadersearch] = useState([])
  const [input, setInput] = useState();
  const form = useRef(null) */
/*   console.log(rating) */

/*   const [headersearch, setHeadersearch] = useState([])
  const [input, setInput] = useState();
  const form = useRef(null) */
/*   console.log(rating) */
/*   const [level1, setLevel1] = useState('');
  const [level2, setLevel2] = useState('');
  const [level3, setLevel3] = useState('');
  const [level4, setLevel4] = useState(''); */

/*   const postconfig = {
    method: post,
    headers: header,
    body: body,
  } */

/* 
  const post = "POST"
  const header = new Headers({
    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1NDE2OTExLCJpYXQiOjE2NjY3NzY5MTEsImp0aSI6IjgxNGE0ZjRhNmZhZTQzNTc4NzU4NmEyZmJmZjE3MDk3IiwidXNlcl9pZCI6Mn0.iof9HyNIXj6cbH4HMXyBm7y8-3Ks7XrIo9MzhOuTwp0`,
    "content-type": "application/json",
  }) */

/*   const body = JSON.stringify({
      "search": `${input}`,
    }) */

/*   const priceLevel = (level)  => {

    if (level == 1) {
        setLevel1("$")
    }
    else if (level == 2) {
        setLevel1("$")
        setLevel2("$$")
    }
    else if (level == 3) {
        setLevel1("$")
        setLevel2("$$")
        setLevel3("$$$")
    }
    else if (level == 4) {
        setLevel1("$")
        setLevel2("$$")
        setLevel3("$$$")
        setLevel4("$$$$")
    }
  } */

/* useEffect((state) => priceLevel({level.price_level === undefined ? 'Loading...' : level.price_level }), []) */

/* console.log(restaurant)*/
/* console.log(reviews) */
/*         setRating = 1; */

/*   const handleSubmit = (event) => {
    event.preventDefault();
    form.current.reset();
    fetch("https://team3luna.propulsion-learn.ch/api/search/", postconfig)
      .then(response => response.json())
      .then((data) => setHeadersearch(data))
      .catch(error => console.log(error))
  } */

/*setTimeout(() => {
   console.log(star1);
 }, 3000)*/