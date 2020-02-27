import React from "react";

export default function InProgress(){
    return (
        <div className="content"> 
            <h1>This content is not yet available <span role="img" aria-label="sad face">😔</span></h1>
            <h3>Please check back later</h3>
            <img class="construction-img" src="https://www.pngitem.com/pimgs/m/46-464912_site-under-construction-hd-png-download.png" alt="under construction" />      
        </div>
    )
}