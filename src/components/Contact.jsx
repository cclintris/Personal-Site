import React from "react";
import { Link } from "react-router-dom";
import "../style/contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import ME_4 from "../assets/memoji/memoji_4.png";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container__contact">
        <div className="lefthand__box">
          <p>
            If you want to know more about my projects or just have a chat.
            Please don't hesitate to reach out to me via the following social
            medias.
          </p>

          <div className="contact__me-img">
            <img src={ME_4} alt="Contact img" />
          </div>

          <div className="contact__info">
            <a href="mailto:cclintris@gmail.com" className="contact-icon">
              <MdEmail />
            </a>
            <a
              href="https://www.linkedin.com/in/tristan-lin-167834246/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsLinkedin />{" "}
            </a>
            <a
              href="https://github.com/cclintris"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsGithub />{" "}
            </a>
            <a
              href="https://www.instagram.com/tristancclin/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsInstagram />{" "}
            </a>
          </div>
        </div>

        <div className="verticalLine"></div>

        <div className="righthandBox">
          <h3>Get Know More About Me</h3>
          <h4>
            <Link to="/projects">Projects</Link>
          </h4>
          <h4>
            <Link to="/posts">Posts</Link>
          </h4>
          <h4>
            <a
              href="https://gist.github.com/cclintris"
              target="_blank"
              rel="noreferrer"
            >
              Github Gists
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Contact;
