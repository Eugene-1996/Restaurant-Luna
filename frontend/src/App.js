import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Restaurants from "./components/Restaurants";
import NewRestaurant from "./components/NewRestaurant";
import RestaurantPage from "./components/RestaurantPage";
import NewReview from "./components/NewReview";
import Userprofile from "./components/Userprofile";
import "./App.css";
import RegMessage from "./components/Registration/RegistrationMessage/RegMessage";
import Verification from "./components/Registration/Validation/Verification";
import Registration from "./components/Registration/Registration_First/Registration";
import Registration_Main from "./components/Registration/Registration_Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header /> {/* Mads */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Avi */}
          <Route path="login" element={<Login />} /> {/* Eugene */}
          <Route path="restaurants" element={<Restaurants />} /> {/* Mads */}
          <Route path="newrestaurant" element={<NewRestaurant />} />
          {/* Robin */}
          <Route path="/restaurantpage/:ID" element={<RestaurantPage />} />
          {/* Robin */}
          <Route path="newreview" element={<NewReview />} /> {/* Robin */}
          <Route path="userprofile" element={<Userprofile />} /> {/* Mads */}
          <Route path="/userprofile/:userID" element={<Userprofile />} /> {/* Mads */}
          <Route path="registration_main" element={<Registration_Main />}>
            <Route path="registration" element={<Registration />} />
            <Route path="regmessage" element={<RegMessage />} />
            <Route path="validation" element={<Verification />} /> {/* Eugene */}
          </Route>
        </Routes>
        <Footer /> {/* Mads */}
      </main>
    </BrowserRouter>
  );
}

export default App;



