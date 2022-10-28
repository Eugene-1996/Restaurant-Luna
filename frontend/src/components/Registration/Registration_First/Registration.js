import {
    Register_button,
    Registration_All,
    Registration_form, Registration_string,

} from "./registration-style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import myAxios from "../../../axios"


const Registration = () => {

    const navigate= useNavigate()
    const [input, setInput] = useState();
    const post = "POST"
    const header = new Headers({
        "content-type": "application/json",
    })

    const body = JSON.stringify({
        "email": `${input}`,
    })

    const postconfig = {
        method: post,
        headers: header,
        body: body,
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://team3luna.propulsion-learn.ch/api/registration/", postconfig)
            .then(response => response.json())
            .then(navigate('/registration_main/regmessage/'))
            .then(console.log(body))
            .catch(error => console.log(error))
    }


    return (
        <>
            <Registration_All>
                <Registration_string>
                    <p>REGISTRATION</p>
                </Registration_string>
                
                <Registration_form id='reg' onSubmit={handleSubmit}>
                    <input form='reg' type="text" name="email" placeholder="E-mail address" onChange={(e) => setInput(e.target.value)} />    

                </Registration_form>
                <Register_button form='reg' type="submit">
                        Register
                    </Register_button>


            </Registration_All>
        </>
    );

};
export default Registration;


/*

function Registration(){
    const navigate= useNavigate()
    const [emailInput, setEmail]=useState()

    const updateEmail=(event)=>{
        setEmail(event.target.value)
    }

    const getCode = (email) =>{
        myAxios.post("/api/registration/", {email: email}).then(response=>{
            navigate("/access/signup/authcode")
        }).catch(()=>alert("get code failed"))
    }



<Register_button form="reg" type="submit" onClick={console.log('asd')}>
          Register
      </Register_button>






                <form id='reg' onSubmit={handleSubmit}>
                <label >Email</label>
                    <input onChange={(e) => { setInput(e.target.value) }}  type='text'></input>
                    <button  form='reg' type="submit">REGISTER</button>
                </form>
*/