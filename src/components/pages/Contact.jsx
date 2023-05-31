import Footer from "../Footer.jsx"
import {useState} from "react";
import {validateNameAndMsg, validateEmail} from '../../utils/helpers';
import "../../styles/Contact.css"


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);


    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // reset error msg to a falsy value to hide it
        setErrorMsg(null);

        if (!validateNameAndMsg(name)) {
            setErrorMsg("Please enter your name");
            return;
        }
        if (!validateEmail(email)) {
            setErrorMsg("Invalid email address");
            return;
        }
        if (!validateNameAndMsg(message)) {
            setErrorMsg("Please enter your message");
        }

    }

    return (
        <div>
            <div className={"container"}>
                <div className={"row d-flex"}>
                    <div className={"col-12 gy-4"}>
                        <div className={'fs-2'}>
                            Contact Me
                        </div>
                        <form id={"contactForm"}>
                            <div className={"mt-1"}>
                                <label>
                                    Name: <br/>
                                    <input value={name} onChange={handleInputChange} type="text" name="name"
                                           placeholder={"name"} required/>
                                </label>
                            </div>
                            <div className={"mt-1"}>
                                <label>
                                    Email: <br/>
                                    <input value={email} onChange={handleInputChange} type="email" name="email"
                                           placeholder={"email"} required/>
                                </label>
                            </div>
                            <div className={"mt-1"}>
                                <label>
                                    Message: <br/>
                                    <textarea value={message} onChange={handleInputChange} name="message"
                                              placeholder={"your message..."} required/>
                                </label>
                            </div>
                            <input className={"rounded bg-light"} id={"contactBtn"} type="submit" value="Submit" onClick={handleFormSubmit}/>
                            {errorMsg && (
                                <span id="errorMsg" className={"ms-2"}>{errorMsg}</span>
                            )}
                        </form>
                    </div>
                    < Footer/>
                </div>
            </div>
        </div>
    )
}