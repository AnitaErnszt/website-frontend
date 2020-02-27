import React from "react";
import Gist from "react-gist";

export default function CodePage(props){
    const lambda_file = props.route + "-lambda"
    const sam_file = props.route + "-SAM"
    const api_file = props.route + "-api"

    console.log("vg: " + props)

    return (
        <div className="codepage">
            <h1>{props.title}</h1>

            <h3 className="code-title-top">Lambda</h3>
            <div className="card">
            <pre><code className="language-python">
            <Gist id={props.id} file={lambda_file}/>
            </code></pre>
            </div>
            
            <h3  className="code-title">Cloudformation-schema</h3>
            <div className="card">
            <pre><code className="language-yaml">
            <Gist id={props.id} file={sam_file}/>
            </code></pre>
            </div>
            
            <h3 className="code-title">API schema</h3>
            <div className="card">
            <pre><code className="language-yaml">
            <Gist id={props.id} file={api_file}/>
            </code></pre>
            </div>
        </div>
    )
}
