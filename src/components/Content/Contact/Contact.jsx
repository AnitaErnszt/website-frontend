import React, { useState } from "react";
import SuccessMessage from "./SuccessMessage";
import ContactForm from "./ContactForm";

export default function Contact(props){
    const [content, SetContent] = useState(<ContactForm handleclick={handleClick} />)

    function handleClick(email){
        var request = new XMLHttpRequest()
        request.addEventListener('load', () => {
            let response = JSON.parse(request.responseText);
            console.log(response.status)
            SetContent(<SuccessMessage />)
        })
        request.open("POST", "https://********.execute-api.eu-west-1.amazonaws.com/dev/contact-email")
        request.send(JSON.stringify(email))
    }

    return (
        <div className="content">
            {content}
        </div>
    )
}