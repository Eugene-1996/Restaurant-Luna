
import {
    Finish_Registration_button,
    Verification_All,
    Verification_form,
    Verification_string
} from "./verification-styles";
import myAxios from "../../../axios"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Verification = () => {
    
    const navigate=useNavigate()

    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPasword] = useState()
    const [first_name, setFirst_name] = useState()
    const [passwordrep, setPasswordrep] = useState()
    const [code, setCode] = useState()
    


    const post = "POST";
    const header = new Headers({
        'content-type': 'application/json'
    })
    const body = JSON.stringify({
        "email": `${email}`,
        "code": `${code}`,
        "username": `${username}`,
        "first_name": `${first_name}`,
        "password_confirm": `${passwordrep}`,
        "password": `${password}`,
    })
    const postconfig = {
        method: post,
        headers: header,
        body: body,
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://team3luna.propulsion-learn.ch/api/registration/validation/", postconfig)
            .then(response => response.json())
            .then(navigate('/login/'))
            .catch(error => console.log(error))
    }

return (
        <Verification_All>
            <Verification_string>
                <p>VERIFICATION</p>
            </Verification_string>
            <Verification_form id='val' onSubmit={handleSubmit}>
                <input form='val' type="text" name="email" placeholder="E-mail address" onChange={(e) => setEmail(e.target.value)}/>
                <input form='val' type="text" name="code" placeholder="Validation code" onChange={(e) => setCode(e.target.value)}/>
                <input form='val' type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <input form='val' type="text" name="Frist Name" placeholder="Frist Name" onChange={(e) => setFirst_name(e.target.value)}/>
                <input form='val' type="text" name="pass" placeholder="Password" onChange={(e) => setPasword(e.target.value)}/>
                <input form='val' type="text" name="pass_rep" placeholder="Password repeat" onChange={(e) => setPasswordrep(e.target.value)}/>
                <Finish_Registration_button form='val' type='submit'>
                    Finish Registration
                </Finish_Registration_button>
            </Verification_form>
        </Verification_All>
    )
}


export default Verification

/*

const [emailInput, setEmailInput]=useState("")
const [code, setCode]=useState("")
const [username, setUsername]=useState("")
const [first_name, setFirst_name]=useState("")
const [passwordInput, setPassword]=useState("")
const [passwordrep, setPasswordep]=useState("")

const updateEmail = (event) => {
    setEmailInput(event.target.value)
}

const updateCode = (event) => {
    setCode(event.target.value)
}

const updateUsername = (event) => {
    setUsername(event.target.value)
}

const updateFirst_name = (event) => {
    setFirst_name(event.target.value)
}

const updatePassword = (event) => {
    setPassword(event.target.value)
}

const updatePasswordrep = (event) => {
    setPasswordep(event.target.value)
}



const UserRegister=(emailInput,code,passwordInput,first_name, username, passwordrep) => {
    myAxios.patch("/api/registration/validation/",{
        email:emailInput,
        code:code,
        password :passwordInput,
        password_confirm: passwordrep,
        username: username,
        first_name: first_name
    }).then(response=>{
        console.log(response)
        navigate("/access/")
        alert("register failed")
    })

    */