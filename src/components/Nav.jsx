import React, {useState} from "react"
import "../style/nav.css"
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from "react-icons/ai"
import {BiBookmarks} from "react-icons/bi"

function Nav() {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a href="/#" onClick={() => setActiveNav("#")} className={activeNav === "#"? "active":"none"}> <AiOutlineHome /> </a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about"? "active":"none"}> <AiOutlineUser /> </a>
            <a href="#canvas" onClick={() => setActiveNav("#canvas")} className={activeNav === "#canvas"? "active":"none"}> <BiBookmarks /> </a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact"? "active":"none"}> <AiOutlineMessage /> </a>
        </nav>
    )
}

export default Nav;