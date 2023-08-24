import React, { useRef, useState } from "react"
import { motion } from "framer-motion";
import HeaderSocial from "./HeaderSocial"
import "../style/header.css"
import ME from "../assets/memoji/memoji_1.png"
import ME_after from "../assets/memoji/memoji_5.png"
import volleyball from "../assets/icons/volleyball.png"
import piano from "../assets/icons/piano.png"
import camera from "../assets/icons/camera.png"
import laptop from "../assets/icons/laptop.png"
import plane from "../assets/icons/plane.png"
import books from "../assets/icons/books.png"

function Header() {
    var clientWidth = document.documentElement.clientWidth;
    const constraintsRef = useRef(null);
    const [click, setClick] = useState(1);
    const [_x, setX] = useState(Array(6).fill().map(() => Math.round(clientWidth / 4)));
    const [_y, setY] = useState(Array(6).fill().map(() => Math.round(170)));
    function handleClicked() {
        setClick(click+1);

        var _W = constraintsRef.current.clientWidth;
        var _H = constraintsRef.current.clientHeight;
        if(click %2 === 0){
            setX(Array(6).fill().map(() => Math.round(_W / 2 - 30)));
            setY(Array(6).fill().map(() => Math.round(_H / 2 + 30)));
        }else {
            setX(Array(6).fill().map(() => Math.round(Math.random() * _W)));
            setY(Array(6).fill().map(() => Math.round(Math.random() * _H)));
        }
    };

    return (
        <section id="header">
            <div className="container header__container">
                <h2>Hello, I'm</h2>
                <motion.h1 whileHover={{scale:2}}>Shu Chuan</motion.h1>
                <h5 className="text-light">a software engineer and a fullstack developer</h5>
                <HeaderSocial />

                <motion.div className="container imgs__container" ref={constraintsRef}>
                    <motion.img
                        initial={{opacity: 0, x: _x[0], y: _y[0]}}
                        animate={click>1 ? {opacity: 1, x: _x[0], y: _y[0]} : {x: _x[0], y: _y[0]}}
                        transition={{
                            ease: "linear",
                            duration: 1.5
                        }}

                        whileTap={{scale:1.05, duration: 0.1}} 
                        drag={true} 
                        dragConstraints={constraintsRef} 
                        className="floating__icons"
                        src={volleyball} 
                        alt="volleyball"         
                    />

                    <motion.img   
                        initial={{opacity: 0, x: _x[1], y: _y[1]}}  
                        animate={click>1 ? {opacity: 1, x: _x[1], y: _y[1]} : {x: _x[1], y: _y[1]}}
                        transition={{
                            ease: "linear",
                            duration: 1.5
                        }}  
                        whileTap={{scale:1.05, duration: 0.1}} 
                        drag={true} 
                        dragConstraints={constraintsRef} 
                        className="floating__icons"
                        src={piano} 
                        alt="piano"   
                    />

                    <motion.img    
                        initial={{opacity: 0, x: _x[2], y: _y[2]}}   
                        animate={click>1 ? {opacity: 1, x: _x[2], y: _y[2]} : {x: _x[2], y: _y[2]}}
                        transition={{
                            ease: "linear",
                            duration: 1.5
                        }}

                        whileTap={{scale:1.05, duration: 0.1}} 
                        drag={true} 
                        dragConstraints={constraintsRef} 
                        className="floating__icons"
                        src={camera} 
                        alt="camera" 
                    />

                    <motion.img   
                        initial={{opacity: 0, x: _x[3], y: _y[3]}}   
                        animate={click>1 ? {opacity: 1, x: _x[3], y: _y[3]} : {x: _x[3], y: _y[3]}}
                        transition={{
                            ease: "linear",
                            duration: 1.5
                        }}                                    
                        whileTap={{scale:1.05, duration: 0.1}} 
                        drag={true} 
                        dragConstraints={constraintsRef} 
                        className="floating__icons"
                        src={laptop} 
                        alt="laptop" 
                    />

                    <motion.img   
                        initial={{opacity: 0, x: _x[4], y: _y[4]}}   
                        animate={click>1 ? {opacity: 1, x: _x[4], y: _y[4]} : {x: _x[4], y: _y[4]}}
                        transition={{
                            ease: "linear",
                            duration: 1.5
                        }}                                   
                        whileTap={{scale:1.05, duration: 0.1}} 
                        drag={true} 
                        dragConstraints={constraintsRef} 
                        className="floating__icons" 
                        src={plane} 
                        alt="plane" 
                    />

                    <motion.img
                        initial={{opacity: 0, x: _x[5], y: _y[5]}}   
                        animate={click>1 ? {opacity:1, x: _x[5], y: _y[5]} : {x: _x[5], y: _y[5]}}
                        transition={{
                            ease: "linear",
                            duration: 1.5
                        }}                                       
                        whileTap={{scale:1.05, duration: 0.1}} 
                        drag={true} 
                        dragConstraints={constraintsRef} 
                        className="floating__icons"
                        src={books} 
                        alt="books" 
                    />

                    <div className="me">
                        <motion.img whileTap={{scale:1.05, duration: 0.1}} onClick={handleClicked} src={click >=2? ME_after:ME} alt="me" />
                    </div>
                </motion.div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </section>
    )
}

export default Header;