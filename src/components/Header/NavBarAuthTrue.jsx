import React from "react";
import {Link} from "react-router-dom";

export default function NavBarAuthTrue(props){
    function handleSignOut() {
      props.signout();
    }

    return (<ul className="navbar-nav ml-auto">
    <li className="nav-item dropleft">
      <a href="/login" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="far fa-smile fa-lg"></i>
      </a>
      <div className="dropdown-menu">
      <form className="px-4 py-3">
      <Link to="/account" className="dropdown-item">My Account</Link>
        <div className="dropdown-divider"></div>
        <Link to="/" className="dropdown-item" onClick={handleSignOut}>Sign out</Link>
      </form>
      </div>
    </li>

  </ul>)
}