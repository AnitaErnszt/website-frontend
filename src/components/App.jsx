import React, { useState} from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./Content/About";
import Contact from "./Content/Contact/Contact";
import SetGame from "./Content/Game/SetGame.jsx";
import Hobbies from "./Content/Hobbies";
import Intro from "./Content/Intro";
import Register from "./Content/Register";
import InProgress from "./Content/InProgress";
import Snippets from "./Content/Snippets/Snippets";
import CodePage from "./Content/Snippets/CodePage";
import GetUserData from "./Content/GetUserData"

export default function App(){
    const [user, SetUser] = useState({
        "loggedIn": false,
        "id_token": ""
    });

    function UserLogin(id_token){
        SetUser({
            "loggedIn": true,
            "id_token": id_token
        })
    }

    function SignOut(){
        SetUser({
            "loggedIn": false,
            "id_token": ""
        })
    }

    return (
        <div>
            <Router> 
            <Header user={user} login={UserLogin} signout={SignOut}/>

            <Switch>            
                <Route path="/" exact component={Intro} />
                <Route path="/about" component={About} />
                <Route path="/contact" render={() => <Contact user={user} />} />
                <Route path="/game" render={() => <SetGame user={user} />}/>
                <Route path="/hobbies" component={Hobbies} />
                <Route path="/register" render={() => <Register />} />
                <Route path="/account" render={() => <GetUserData user={user} />} />
                <Route path="/inprogress" component={InProgress} />
                <Route path="/snippets" exact component={Snippets} />
                <Route path="/snippets/email" render={(match) => <CodePage test={match} id="51b4b249a57993f91351f8cbffd1cc05" route="email" />} />
                <Route path="/snippets/login" render={(match) => <CodePage test={match} id="ee5c62fe694e268fd4101909dd3ed0b1" route="login" />} />
                <Route path="/snippets/register" render={(match) => <CodePage test={match} id="c271586ecfc1fd4f74ebe4cb17f21f9d" route="register" />} />
                <Route path="/snippets/account" render={(match) => <CodePage test={match} id="506bcbaa0a85cd0e4f919f92bb8fd1b3" route="account" />} />
                </Switch>
            
            <Footer />
            </Router>
        </div>
        )
}