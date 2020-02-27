import React from "react";
import {Link} from "react-router-dom";

let year = new Date().getFullYear()

export default function Footer(){
    return (
        <footer className="page-footer font-small cyan darken-3 fixed-bottom text-center">

    <div className="row cyan-dark py-2 text-left">
    <div className="column footer-copyright">
    <p className="copyright">&copy; {year} Anita Ernszt</p>

    </div>
    <div className="column text-right footer-copyright">
    <a className="fb-ic" href="https://github.com/AnitaErnszt">
        <i className="fab fa-github fa-lg"> </i>
    </a>

    <Link to="/contact"><i className="fas fa-envelope fa-lg" /></Link>

    <a className="li-ic" href="https://www.linkedin.com/in/anita-ernszt-339147a6/">
        <i className="fab fa-linkedin-in fa-lg"> </i>
    </a>
    </div>
    </div>
    </footer>
    )
}