import React from "react";
import Code from "./Code";

export default function CodePage(param){
    console.log(param)
    return (
        <div className="content">
            <Code
                title={param.title}
                route={param.route}
                id={param.id}
            />
        </div>
    )
}