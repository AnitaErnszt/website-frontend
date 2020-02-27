import React, { useEffect, useState } from "react";

export default function GetUserData(props){
    const [response, SetResponse] = useState({})

    useEffect(() => {
        GetData();
    }, [])

    function GetData(){
        const request = new XMLHttpRequest();
        request.addEventListener("load", () => {
            SetResponse(JSON.parse(request.responseText).data.profile);
        })
        request.open("GET", "https://********.execute-api.eu-west-1.amazonaws.com/dev/account");
        request.setRequestHeader("Authorization", "Bearer " + props.user.id_token);
        request.send();
    }

    return (
       <div className="content">
        <h1>My account</h1>
        <input type="text" className="form-control register-form" name="first_name" value={response.first_name}></input>
        <input type="text" className="form-control register-form" name="last_name" value={response.last_name}></input>
        <input type="text" className="form-control register-form" name="email" value={response.email}></input>
       </div>
    )
}