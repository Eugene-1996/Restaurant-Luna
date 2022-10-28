import { ReactComponent as Star } from "../../../images/icons/svgs/star.svg"
import React, { useState, useEffect } from 'react';
import { HeaderComponent, BackgroundImage, Overlay, Information, Flex, StarWrapper } from "./RestaurantHeader.styles"

const RestaurantHeader = (props) => {

    const [star1, setStar1] = useState('white');
    const [star2, setStar2] = useState('white');
    const [star3, setStar3] = useState('white');
    const [star4, setStar4] = useState('white');
    const [star5, setStar5] = useState('white');
    const [opacity1, setOpacity1] = useState('0.5');
    const [opacity2, setOpacity2] = useState('0.5');
    const [opacity3, setOpacity3] = useState('0.5');
    const [opacity4, setOpacity4] = useState('0.5');
    const [opacity5, setOpacity5] = useState('0.5');

    const fillStars = (rating) => {
        if (rating == 1) {
            setStar1("#F8E71C")
            setOpacity1("1")
        }
        else if (rating == 2) {
            setStar1("#F8E71C")
            setStar2("#F8E71C")
            setOpacity1("1")
            setOpacity2("1")
        }
        else if (rating == 3) {
            setStar1("#F8E71C")
            setStar2("#F8E71C")
            setStar3("#F8E71C")
            setOpacity1("1")
            setOpacity2("1")
            setOpacity3("1")
        }
        else if (rating == 4) {
            setStar1("#F8E71C")
            setStar2("#F8E71C")
            setStar3("#F8E71C")
            setStar4("#F8E71C")
            setOpacity1("1")
            setOpacity2("1")
            setOpacity3("1")
            setOpacity4("1")
        }
        else if (rating == 5) {
            setStar1("#F8E71C")
            setStar2("#F8E71C")
            setStar3("#F8E71C")
            setStar4("#F8E71C")
            setStar5("#F8E71C")
            setOpacity1("1")
            setOpacity2("1")
            setOpacity3("1")
            setOpacity4("1")
            setOpacity5("1")
        }
    }

    useEffect((state) => fillStars(props.rating), [])


    return (
        <HeaderComponent>
            <BackgroundImage src={props.image} alt="Restaurant Image" />
            <Overlay />
            <Information>
                <div>{props.name}</div>
                <div className="restaurant-type">{props.category}</div>

                <Flex>
                    <StarWrapper>
                        <Star className="star" fill={star1 === 'white' ? 'white' : star1} opacity={opacity1 === '0.5' ? '0.5' : opacity1} stroke="none" />
                        <Star className="star" fill={star2 === 'white' ? 'white' : star2} opacity={opacity2 === '0.5' ? '0.5' : opacity2} stroke="none" />
                        <Star className="star" fill={star3 === 'white' ? 'white' : star3} opacity={opacity3 === '0.5' ? '0.5' : opacity3} stroke="none" />
                        <Star className="star" fill={star4 === 'white' ? 'white' : star4} opacity={opacity4 === '0.5' ? '0.5' : opacity4} stroke="none" />
                        <Star className="star" fill={star5 === 'white' ? 'white' : star5} opacity={opacity5 === '0.5' ? '0.5' : opacity5} stroke="none" />
                    </StarWrapper>
                    <span className="review-number">{props.reviewsN}</span>
                    <span className="review">reviews</span>
                </Flex>
            </Information>

        </HeaderComponent>
    );

};
export default RestaurantHeader;