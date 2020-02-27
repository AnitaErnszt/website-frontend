import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function Register (){
    const [registerForm, SetRegisterForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })

    function handleRegForm(event){
        const {name, value} = event.target

        SetRegisterForm((previousValue) => {
            return {
                ...previousValue,
                [name]: value
                }
            
        })
    }

    function handleClick(){
        var request = new XMLHttpRequest();
        request.addEventListener("load", () => {
            let response = JSON.parse(request.responseText);
            console.log(response.status)
        })
        request.open("POST", "https://tpcarzfjda.execute-api.eu-west-1.amazonaws.com/dev/auth/register")
        request.send(JSON.stringify(registerForm))
    }
    

    return (
        <div className="content register">
            <h1>Register</h1>
            <input type="text" className="form-control register-form" name="first_name" placeholder="First name" value={registerForm.first_name} onChange={handleRegForm} required></input>
            <input type="text" className="form-control register-form" name="last_name" placeholder="Last name" value={registerForm.last_name} onChange={handleRegForm} required></input>
            <input type="email" className="form-control register-form" name="email" placeholder="Email" value={registerForm.email} onChange={handleRegForm} required></input>
            <input type="password" className="form-control register-form" name="password" placeholder="Password" value={registerForm.password} onChange={handleRegForm} required></input>
            <Link to="/inprogress"><button className="btn btn-lg btn-outline-info btn-signup" type="submit" onClick={handleClick}>Sign up!</button></Link>
        </div>)

}