import React from "react";
import TagButton from "./TagButton";
import {Link} from "react-router-dom";

export default function Snippetcard(props){
    const tags=props.tags;
    const redirect_route = "/snippets/" + props.route

    return (
        <div className="card">
            <div className="card-body">
                <h5><Link to={redirect_route} className="card-title" title="Test this">{props.name}</Link></h5>
                <p className="card-text">{props.description}</p>
                <div className="card-tags">
                </div>
            </div>
        </div>
    )
}