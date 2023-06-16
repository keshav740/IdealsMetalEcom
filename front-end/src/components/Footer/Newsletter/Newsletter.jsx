import "./Newsletter.scss";

import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Newsletter = () => {
    const [formState, setFormState] = useState({});
    
    const changeHandeler = (event) => {
        setFormState({...formState, [event.target.name] : event.target.value});
    }
    const submitHandeler = (event) =>{
        event.preventDefault();
        const config = {
            Username : "keshavsaini9837033948@gmail.com",
            Password : "DFDDEB5103783980691E2EF0EA76370BE24D",
            Host : "smtp.elasticemail.com",
            Port : "2525",
            To : 'keshavsaini9837033948@gmail.com',
            From : formState.email,
            Subject : "This is the email from my website",
            Body : `${formState.name} connected to you over email`
        };
        if(window.Email){
            window.Email.send(config).then(() => alert("send sucessfully"));
        }
    }
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign up for latest updates and offers</span>
            <form action="" onSubmit={submitHandeler}>
            <div className="form">
                <input type="text" placeholder="name" name="name" value={formState.name || ''} onChange={changeHandeler}/>
                <input type="email" placeholder="email" name="email" value={formState.email || ''} onChange={changeHandeler}/>
                <button type="submit">Send Email</button>
            </div>
            </form>
            <div className="text">Will be used in Accordence</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icon">
                    <FaTwitter size={14}/>
                </div>
                <div className="icon">
                    <FaInstagram size={14}/>
                </div>
                <div className="icon">
                    <FaLinkedinIn size={14}/>
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
