import React from "react";
import {Link} from "react-router-dom";

export default function NavbarLeft(){

    return (
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a href="/" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
        <div className="dropdown-menu dropdown-info">
          <Link to="/" className="dropdown-item">Intro</Link>
          <Link to="/about" className="dropdown-item">About me</Link>
          <Link to="/inprogress" className="dropdown-item">CV</Link>
          <Link to="/hobbies" className="dropdown-item">Hobbies</Link>
        </div>
      </li>


      <li className="nav-item">
        <Link to="/game" className="nav-link">Game</Link>
      </li>
      <li className="nav-item">
        <Link to="/snippets" className="nav-link">Code snippets</Link>
      </li>
    </ul>
    )
}