import { useNavigate } from "react-router";
import {Registration_string, RegMessage_All, RegMessage_button, RegMessage_Text} from "./regmess-styles";

const RegMessage = () => {

    const navigate = useNavigate()

    const goToValidation = () => {
        navigate('/registration_main/validation/')
    }

    return (
        <>
            <RegMessage_All>
                <Registration_string>
                    <p>REGISTRATION</p>
                </Registration_string>
                <RegMessage_Text>
                    <p>Thanks for your registration.<br />
                        Our hard working monkeys are preparing a digital<br />
                        message called E-Mail that will be sent to you soon.<br />
                        Since monkeys arent good in writing the message could<br />
                        end up in you junk folder. Our apologies for any<br />
                        inconvienience.thank for </p>
                </RegMessage_Text>
                <RegMessage_button onClick={goToValidation}>Finish my registration</RegMessage_button>
            </RegMessage_All>
        </>
    )
}


export default RegMessage