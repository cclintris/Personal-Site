import React from "react";
import "../style/header.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/tristan-lin-167834246/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsLinkedin />{" "}
      </a>
      <a
        href="https://leetcode.com/cclintris/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode />
      </a>
      <a href="https://github.com/cclintris" target="_blank" rel="noreferrer">
        {" "}
        <BsGithub />{" "}
      </a>
    </div>
  );
};

export default HeaderSocial;
