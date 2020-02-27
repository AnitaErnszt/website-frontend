import React from "react";
import Snippetcard from "./Snippetcard"
import Linkcard from "./Linkcard"

export default function Snippets(){
    return (
        <div className="content">
            <h1>Check out the codes that run the backend</h1>
            <Snippetcard 
                name="Email me API" 
                description="Email forwarding using AWS SNS"
                tags={["API", "Python", "Lambda"]}
                route="email"
                id="51b4b249a57993f91351f8cbffd1cc05"
            />
            <Snippetcard 
                name="Register API" 
                description="Saves user to Cognito and DynamoDB"
                tags={["API", "Python", "Lambda"]}
                route="register"
            />
            <Snippetcard 
                name="Login API" 
                description="Authenticates the username and password"
                tags={["API", "Python", "Lambda"]}
                route="login"
            />
            <Snippetcard 
                name="Get Account API" 
                description="Retrieves the user details from DynamoDB"
                tags={["API", "Python", "Lambda"]}
                route="account"
            />
            <Linkcard 
                name="Link to the backend GitHub repository" 
                to="https://github.com/AnitaErnszt/website-backend"
            />
            <Linkcard 
                name="Link to the frontend GitHub repository" 
                to="https://github.com/AnitaErnszt/website-frontend"
            />
        </div>
    )
}