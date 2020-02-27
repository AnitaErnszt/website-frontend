import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function NavbarRight(props){
    const [login, SetLogin] = useState({
      "email": "",
      "password": ""
    })

    function handleInput(event){
      const {name, value} = event.target;

      SetLogin(prevValue => {
        return {
          ...prevValue,
          [name]: value
        }
      })
    }

    function handleLogin(){
      var request = new XMLHttpRequest();
      request.addEventListener("load", () => {
        let response = JSON.parse(request.responseText);
        if (response.status === "success"){
          props.login(response.data.session.id_token);
        }
      });
      request.open("POST", "https://********.execute-api.eu-west-1.amazonaws.com/dev/auth/login");
      request.send(JSON.stringify(login))
    }


    return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropleft">
            <a href="/login" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user"></i>
            </a>
            <div className="dropdown-menu">
            <form className="px-4 py-3">
                <div className="form-group">
                  <label htmlFor="exampleDropdownFormEmail">Email address</label>
                  <input type="email" className="form-control" onChange={handleInput} name="email" placeholder="email@example.com" value={login.email}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleDropdownFormPassword">Password</label>
                  <input type="password" className="form-control" onChange={handleInput} name="password" placeholder="Passw0rd!" value={login.password}/>
                </div>
                <button type="button" className="btn btn-outline-info" onClick={handleLogin}>Sign in</button>
              <div className="dropdown-divider"></div>
              <Link to="/register" className="dropdown-item">New around here? Sign up</Link>
              <Link to="/inprogress" className="dropdown-item">Forgot password?</Link>
            </form>
            </div>
          </li>

        </ul>
    )
}