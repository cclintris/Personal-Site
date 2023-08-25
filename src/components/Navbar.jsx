import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

const CustomLink = ({ href, text, ...props }) => {
  return (
    <li>
      <Link to={href} {...props}>
        {text}
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="home-route">
        Tristan / Shi-Cheng
      </Link>
      <ul>
        <CustomLink className="customlink" href="/projects" text="Projects" />
        <CustomLink className="customlink" href="/posts" text="Posts" />
      </ul>
    </nav>
  );
};

export default Navbar;
