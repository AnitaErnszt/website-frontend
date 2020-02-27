import React from "react";

export default function Snippetcard(props){
    const redirect_route = props.to

    return (
        <div className="card">
            <div className="link-card-body">
                <h5><a href={redirect_route} className="link-card-title">{props.name}</a></h5>
            </div>
        </div>
    )
}