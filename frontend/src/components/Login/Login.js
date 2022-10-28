import {Login_All, Login_button, Login_form, Login_string} from "./login-styles";
import { Outlet } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {

    const navigate = useNavigate();
    const [username, setUsernameInput] = useState()
    const [password, setPasswordInput] = useState()

    const post = "POST"
    const header = new Headers({
        "content-type": "application/json"
    })

    const body = JSON.stringify({
        "username": `${username}`,
        "password": `${password}`,
    })

    const postconfig = {
        method: post,
        headers: header,
        body: body
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://team3luna.propulsion-learn.ch/api/auth/token/", postconfig)
            .then(response => response.json())
            .then((data) => {localStorage.setItem("luna-auth", JSON.stringify(data.access)); navigate('../../') })
            .catch(error => console.log(error))
    }


    return (
        <Login_All>
            <Login_string>
                <p>LOGIN</p>
            </Login_string>
            <Login_form id='val' onSubmit={handleSubmit}>
                
                <input form='val' type="text" name="username" placeholder="Username" onChange={(e) => setUsernameInput(e.target.value)} />
                <br />
                <input form='val' type="text" name="password" placeholder="Password" onChange={(e) => setPasswordInput(e.target.value)} />

                <Login_button form='val' type='submit'>LoginButton</Login_button>
                
            
            </Login_form>
        </Login_All>
    );
};
export default Login;

/*

// const Login = (email, password) => {
//
//     myAxios.post("/auth/token/", {email: email, password: password}).then(response => {
//         navigate("/profile")
//         const user = {email: email, token: response.data.access};
//         dispatch(setUser(user))
//         console.log("----the token----")
//         console.log(response.data.access)
//
//         localStorage.setItem("luna-auth", JSON.stringify(user))
//     }).catch(() => alert("login failed"))
// }

<Login_button>
                    Login
                </Login_button>

*/