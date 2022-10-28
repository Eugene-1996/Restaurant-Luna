import { PageForm } from "./NewRestaurant.styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewRestaurant = () => {


  let localToken = JSON.parse(localStorage.getItem("luna-auth"))
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [country, setCountry] = useState()
  const [street, setStreet] = useState()
  const [zip, setZip] = useState()
  const [phone, setPhone] = useState()
  const [website, setWebsite] = useState()
  const [email, setEmail] = useState()
  const [opening_hours, setOpening_hours] = useState()
  const [price_level, setPrice_level] = useState() /*input can only be 1-2-3-4 */
  const [user, setUser] = useState()
  const navigate = useNavigate();

  const post = "POST"
  const get = "GET"
  const header = new Headers({
    "Authorization": `Bearer ${localToken}`,
    "content-type": "application/json",
  })

  const body = JSON.stringify({
    "name": `${name}`,
    "category": `${category}`,
    "country": `${country}`,
    "street": `${street}`,
    "zip": `${zip}`,
    "phone": `${phone}`,
    "website": `${website}`,
    "email": `${email}`,
    "opening_hours": `${opening_hours}`,
    "price_level": `${price_level}`,
    "user": `${user === undefined ? 1 : user.id}`
  })

  const postconfig = {
    method: post,
    headers: header,
    body: body,
  }

  const getconfig = {
    method: get,
    headers: header,
  }

  useEffect((state) => {
    fetch(`https://team3luna.propulsion-learn.ch/api/me/`, getconfig) /* this will take the logged in user to assign the new restaurant to self*/
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://team3luna.propulsion-learn.ch/api/restaurants/new/", postconfig)
      .then(response => response.json())
      .then((data) => navigate("/userprofile/")) /*after creating new restaurant, navigate back to user page*/
      .catch(error => console.log(error))
  }

  return (
    <section>
      <PageForm id="new-restaurant" onSubmit={handleSubmit}>

        <div className="main-title">CREATE A NEW RESTAURANT<div className="line"></div></div>
        <div className="basic">Basic</div>

        <div>
          <label htmlFor="name">Name</label>
          <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required></input>
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input onChange={(e) => setCategory(e.target.value)} id='category' name='category' form="new-restaurant" type='text' required></input>
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input onChange={(e) => setCountry(e.target.value)} id='country' name='country' type='text' form="new-restaurant" required></input>
        </div>


        <div className="basic">Address</div>


        <div>
          <label htmlFor="street">City and Street</label>
          <input onChange={(e) => setStreet(e.target.value)} id='street' name='street' type='text' form="new-restaurant" required></input>
        </div>

        <div>
          <label htmlFor="zip">Zip</label>
          <input onChange={(e) => setZip(e.target.value)} id='zip' name='zip' type='number' form="new-restaurant" required></input>
        </div>



        <div className="basic">Contact</div>


        <div>
          <label htmlFor="website">Website</label>
          <input onChange={(e) => setWebsite(e.target.value)} id='website' name='website' type='url' form="new-restaurant" required></input>
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input onChange={(e) => setPhone(e.target.value)} id='phone' name='phone' type='number' form="new-restaurant" required></input>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} id='email' name='email' type='email' form="new-restaurant" required></input>
        </div>


        <div className="basic">Details</div>


        <div>
          <label htmlFor="opening_hours">Opening hours</label>
          <input onChange={(e) => setOpening_hours(e.target.value)} id='opening_hours' name='opening_hours' type='text' form="new-restaurant" required></input>
        </div>

        <div>
          <label htmlFor="price_level">Price level 1-4</label>
          <input onChange={(e) => setPrice_level(e.target.value)} id='price_level' name='price_level' type='number' form="new-restaurant" required></input>
        </div>


        <button className="submit-button" form='new-restaurant' type="submit">SAVE</button>

      </PageForm>




    </section>
  );

};
export default NewRestaurant;

/*

If we have time:

<div className="file-upload-div">
  <label htmlFor="image-upload">Image</label>
  <label htmlFor="image-upload" className="custom-file-upload">
    CHOOSE A FILE...
  </label>
  <input id="image-upload" name="image-upload" type="file" />
</div>

*/
