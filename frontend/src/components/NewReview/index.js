import styled from "styled-components";
import restaurantTestImage from "../../images/restaurants/card-4.jpg"
import {ReactComponent as Star} from "../../images/icons/svgs/star.svg"
import profilePicture from "../../images/users/profile-face.png"
import React, { useState } from 'react';
import {Page, HeaderComponent, BackgroundImage, Overlay, Information, Flex, StarWrapper, SelectRating, Main, InputText, DivButton} from "./NewReview.styles.js"

const NewReview = () => {
  const [rating, setRating] = useState();
  const [star1, setStar1] = useState('white');
  const [star2, setStar2] = useState('white');
  const [star3, setStar3] = useState('white');
  const [star4, setStar4] = useState('white');
  const [star5, setStar5] = useState('white');

  const [selectedRating, setSelectedRating] = useState();
  const [starRating1, setStarRating1] = useState('black');
  const [starRating2, setStarRating2] = useState('black');
  const [starRating3, setStarRating3] = useState('black');
  const [starRating4, setStarRating4] = useState('black');
  const [starRating5, setStarRating5] = useState('black');

  
  const fillStars = (rating) => {
      if (rating == 1) {
          setStar1 = "#F8E71C"
      }
      else if (rating == 2) {
          setStar1 = "#F8E71C"
          setStar2 = "#F8E71C"
      }
      else if (rating == 3) {
          setStar1 = "#F8E71C"
          setStar2 = "#F8E71C"
          setStar3 = "#F8E71C"
      }
      else if (rating == 4) {
          setStar1 = "#F8E71C"
          setStar2 = "#F8E71C"
          setStar3 = "#F8E71C"
          setStar4 = "#F8E71C"
      }
      else if (rating == 5) {
          setStar1 = "#F8E71C"
          setStar2 = "#F8E71C"
          setStar3 = "#F8E71C"
          setStar4 = "#F8E71C"
          setStar5 = "#F8E71C"
      }
      }
      fillStars(rating)
/*         setRating = 1; */
  
  const fillSelectedStars = (selectedRating) => {
      if (selectedRating == 1) {
          setStarRating1 = "#F8E71C"
      }
      else if (selectedRating == 2) {
          setStarRating1 = "#F8E71C"
          setStarRating2 = "#F8E71C"
      }
      else if (selectedRating == 3) {
          setStarRating1 = "#F8E71C"
          setStarRating2 = "#F8E71C"
          setStarRating3 = "#F8E71C"
      }
      else if (selectedRating == 4) {
          setStarRating1 = "#F8E71C"
          setStarRating2 = "#F8E71C"
          setStarRating3 = "#F8E71C"
          setStarRating4 = "#F8E71C"
      }
      else if (selectedRating == 5) {
          setStarRating1 = "#F8E71C"
          setStarRating2 = "#F8E71C"
          setStarRating3 = "#F8E71C"
          setStarRating4 = "#F8E71C"
          setStarRating5 = "#F8E71C"
      }
      }
      fillSelectedStars(selectedRating)
/*         setRating = 1; */

return (
<Page>
    <HeaderComponent>
          <BackgroundImage src={restaurantTestImage} alt="Restaurant Image"/>
          <Overlay/>
          <Information>
              <div>Restaurant Name</div>
              <div className="restaurant-type">Type</div>
              
              <Flex>
                  <StarWrapper>
                      <Star className="star" fill={star1} stroke="none"/>
                      <Star className="star" fill={star2} stroke="none"/>
                      <Star className="star" fill={star3} stroke="none"/>
                      <Star className="star" fill={star4} stroke="none"/>
                      <Star className="star" fill={star5} stroke="none"/>
                  </StarWrapper>
                  <span className="review-number">0</span>
                  <span className="review">reviews</span>
              </Flex>
          </Information>

    </HeaderComponent>

    <Main>
        <form>
              <SelectRating>
                    
                        <Star className="star-rating" fill={starRating1} stroke="none"/>
                        <Star className="star-rating" fill={starRating2} stroke="none"/>
                        <Star className="star-rating" fill={starRating3} stroke="none"/>
                        <Star className="star-rating" fill={starRating4} stroke="none"/>
                        <Star className="star-rating" fill={starRating5} stroke="none"/>

                        <div>Select your rating</div>
                
              </SelectRating>
              <InputText name="review" required placeholder="Your Review helps others learn about great local businesses.&#10;Please don't review this business if you received a freebie for writing this review,&#10;or if you're connected in any way to the owner or employees. "/>
              <DivButton>
                  <button type="submit">SUBMIT</button>
              </DivButton>

        </form>
    </Main>

</Page>
);


};
export default NewReview;
