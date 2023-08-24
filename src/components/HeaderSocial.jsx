import React from "react"
import "../style/header.css"
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {SiLeetcode} from "react-icons/si"

function HeaderSocial() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/shu-chuan-hsu-8b76651a8/" target="_blank" rel="noreferrer"> <BsLinkedin /> </a>
            <a href="https://leetcode.com/leo3590581/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
            <a href="https://github.com/leo880714" target="_blank" rel="noreferrer"> <BsGithub /> </a>
        </div>    
    )
}

export default HeaderSocial;