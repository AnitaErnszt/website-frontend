import React, { useState } from "react";

export default function ContactForm(props){
    const [email, SetEmail] = useState({
        sender: "",
        subject: "",
        message: ""
    })

    function handleEmail(event){
        const {name, value} = event.target

        SetEmail(prevValue => {
            return (
                {
                    ...prevValue,
                    [name]: value
                }
            )
        })
    }

    function handleSend(){
        props.handleclick(email);
    }

    return (
        <div className="content">
            <h1>Send email to me</h1>
            <div className="text-left">
            <div className="form-group">
                <label>Email address:</label>
                <input type="email" className="form-control" name="sender" onChange={handleEmail} value={email.sender}/>
            </div>

            <div className="form-group">
                <label>Subject:</label>
                <input type="text" className="form-control" name="subject" onChange={handleEmail} value={email.subject}/>
            </div>

            <div className="form-group">
                <label>Message:</label>
                <textarea className="form-control" rows="5" name="message" onChange={handleEmail} value={email.message}></textarea>
            </div>

            <div className="text-center">
            <button type="submit" className="btn btn-outline-info" onClick={handleSend}>I'm happy to send</button>
            </div>
            </div>
        </div>
    )
}