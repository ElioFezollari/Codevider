import { useState } from "react";
import { textAnimation } from "../../Variants";
import dogIcon from '../../assets/dog-icon.svg'
import dog from "../../assets/dog2.webp";
import { motion } from "framer-motion";
const ContactUs = () =>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [lName,setLName] = useState('')
    const [message,setMessage] = useState('')
    return(
        <div id="contact-us">
            <div className="contact-us-wrapper">
            <div className="contact-us-content">
                <div className="message">
                <h3>Contact Us</h3>
                    <div>
                        <form action="">
                            <div>
                            <label >First Name:{' '} 
                                <input type="text" typeof="text" value={name} onChange={(e)=>setName(e.target.value)} />
                            </label>
                            <label >Last Name:{' '} 
                                <input type="text" typeof="text" value={lName} onChange={(e)=>setLName(e.target.value)} />
                            </label>
                            <label >Email:{' '} 
                                <input type="email" typeof="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </label>
                            </div>
                            <label> Message: 
                                <textarea value={message} onChange={((e)=>setMessage(e.target.value))}/>
                            </label>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
                <div className="contact">

                </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs