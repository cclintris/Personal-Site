import React from "react"
import { Link } from "react-router-dom"
import "../style/navbar.css"

function CustomLink({href, subPath, ...props}) {

    return (
        <li>
            <Link to={href} {...props}>{subPath}</Link>
        </li>  
    )
}


function Navbar() {

    return (
        <nav className="navbar">
            <Link to="/" className="home-route">Shu-Chuan</Link>
            <ul>
                <CustomLink className="customlink" href="/projects" subPath="Projects" />
                <CustomLink className="customlink" href="/posts" subPath="Posts" />
            </ul>
        </nav>
    )
}

export default Navbar;
