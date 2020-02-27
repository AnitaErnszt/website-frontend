import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import NavBarAuthTrue from "./NavBarAuthTrue";

export default function Header(props){
  const user = props.user

  function handleLogin(id_token){
    props.login(id_token);
  }

  function handleSignOut(){
    props.signout();
  }

    return (
        <nav className="navbar navbar-expand-md navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <NavbarLeft />
        {user.loggedIn ? <NavBarAuthTrue user={user} signout={handleSignOut} /> : <NavbarRight login={handleLogin}/>}
      </div>

    </nav>
        
    )
}