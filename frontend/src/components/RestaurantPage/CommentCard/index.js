
import { CommentCardTop, FlexPerson, ColumnPerson, CommentCardMiddle, FlexCardMiddle, Flex } from "./CommentCard.styles"
import React, { useState, useEffect } from 'react';
import { ReactComponent as Thumb } from "../../../images/icons/svgs/thumb.svg"
import profilePicture from "../../../images/users/profile-face.png"
import { ReactComponent as Star } from "../../../images/icons/svgs/star.svg"
import { useNavigate } from "react-router";

const CommentCard = (props) => {

    let localToken = JSON.parse(localStorage.getItem("luna-auth"))
    const navigate = useNavigate();
    const [reviews, setReviews] = useState();
    const [self, setSelf] = useState();
    const [star1, setStar1] = useState('black');
    const [star2, setStar2] = useState('black');
    const [star3, setStar3] = useState('black');
    const [star4, setStar4] = useState('black');
    const [star5, setStar5] = useState('black');
    const [opacity1, setOpacity1] = useState('0.07');
    const [opacity2, setOpacity2] = useState('0.07');
    const [opacity3, setOpacity3] = useState('0.07');
    const [opacity4, setOpacity4] = useState('0.07');
    const [opacity5, setOpacity5] = useState('0.07');

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
    fetch(`https://team3luna.propulsion-learn.ch/api/users/${props.user}/`, getconfig)
      .then(response => response.json())
      .then(data => setSelf(data))
      .catch(error => console.log(error));

    fetch(`https://team3luna.propulsion-learn.ch/api/reviews/user/${props.user}/`, getconfig)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));

    },[])



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

    const goToUser = () => {
        navigate(`/userprofile/${self.id}/`)
    }

    return (
        <>
            <CommentCardTop key={props.i} >

                <FlexPerson>

                    <Flex>
                        <img src={self === undefined ? profilePicture : self.avatar} onClick={goToUser}/>

                        <ColumnPerson>
                            <span className="name" onClick={goToUser}>{self === undefined ? 'Loading...' : self.first_name} {self === undefined ? 'Loading...' : self.last_name}</span>   {/* {props.users[props.review.user].avatar} */}
                            <span className="reviews-total">{reviews === undefined ? 'Loading...' : reviews.length} Reviews in total</span>
                        </ColumnPerson>
                        
                        <Star className="star" fill={star1 === 'black' ? 'black' : star1}  opacity={opacity1 === '0.07' ? '0.07' : opacity1} stroke="none" />
                        <Star className="star" fill={star2 === 'black' ? 'black' : star2} opacity={opacity2 === '0.07' ? '0.07' : opacity2} stroke="none" />
                        <Star className="star" fill={star3 === 'black' ? 'black' : star3} opacity={opacity3 === '0.07' ? '0.07' : opacity3} stroke="none" />
                        <Star className="star" fill={star4 === 'black' ? 'black' : star4} opacity={opacity4 === '0.07' ? '0.07' : opacity4} stroke="none" />
                        <Star className="star" fill={star5 === 'black' ? 'black' : star5} opacity={opacity5 === '0.07' ? '0.07' : opacity5} stroke="none" />
                    </Flex>

                    <span className="date-time">{props.created.slice(0, -8)}</span>

                </FlexPerson>

            </CommentCardTop>

            <CommentCardMiddle>
                <div className="comment-text">
                    {props.content === undefined ? 'Loading...' : props.content}
                </div>
                <FlexCardMiddle>
                    <div className="like-comment">
                        <Thumb className="thumb" />
                        <a>Like</a>
                        <span>0</span><span className="line" />
                        <a>Comment</a>
                        <span>0</span>
                    </div>
                    <a className="view-all-comments">View all comments</a>
                    {/*                         <div className="post-input">
            <form>
            <input type="text" required placeholder="Hide comments"/>
            <button>POST</button>
            </form> 
        </div> 
        <a className="view-all-comments">View all comments</a>  */}
                </FlexCardMiddle>
            </CommentCardMiddle>
            {/* 
<CommentCardEnd>
    <FlexCardEnd>
        <div>Name</div>
        <span>recently</span>
    </FlexCardEnd>
    
    <CommentText2>Comment</CommentText2>
</CommentCardEnd> */}

        </>
    );
};
export default CommentCard;