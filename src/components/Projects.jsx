import React from "react"
import { Link } from "react-router-dom"
import "../style/projects.css"

import Footer from "./Footer"
import ParallaxMousemove from "react-parallax-mousemove"
import c from "../assets/icons/c.png"
import python from "../assets/icons/python.png"
import matlab from "../assets/icons/matlab.png"
import go from "../assets/icons/go.png"
import js from "../assets/icons/js.png"
import opencv from "../assets/icons/opencv.png"
import pytorch from "../assets/icons/pytorch.png"
import react from "../assets/icons/react.png"
import nodejs from "../assets/icons/nodejs.png"

import web from "../assets/projects/personal_web.png"
import styleDNA from "../assets/projects/styleDNA.png"
import videoframes from "../assets/projects/videoframes.png"
import autocar from "../assets/projects/autocar.png"
import {BsGithub} from  "react-icons/bs"
import {SiGooglecolab} from "react-icons/si"
import {AiFillHome} from "react-icons/ai"

const style = {
    infoLayerStyle: {
      position: 'relative',
      marginTop: '-60px',
    },
  }

function Projects() {

    return (
        <>
            <section id="projects">   
                <div className="container container__header">
                    <div className="text__container">
                        <h4>See my Projects</h4>
                        <h1>That's what I got</h1>
                    </div>

                    <div className="">
                        <ParallaxMousemove>
                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.05,
                                yFactor: -0.15,
                                springSettings: {
                                    stiffness: 50,
                                    damping: 100
                                }
                                }}>
                                    <img className="parallax__img c" src={c} alt="c++"></img>
                                </ParallaxMousemove.Layer>

                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: -0.25,
                                yFactor: -0.45,
                                springSettings: {
                                    stiffness: 50,
                                    damping: 100
                                }
                                }}>
                                    <img className="parallax__img nodejs" src={nodejs} alt="nodejs"></img>
                                </ParallaxMousemove.Layer>

                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.2,
                                yFactor: -0.25,
                                springSettings: {
                                    stiffness: 50,
                                    damping: 100
                                }
                                }}>
                                    <img className="parallax__img py" src={python} alt="py"></img>
                                </ParallaxMousemove.Layer>

                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: -0.24,
                                yFactor: -0.17,
                                springSettings: {
                                    stiffness: 50,
                                    damping: 100
                                }
                                }}>
                                    <img className="parallax__img react" src={react} alt="react"></img>
                                </ParallaxMousemove.Layer>

                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: -0.15,
                                yFactor: 0.15,
                                springSettings: {
                                    stiffness: 50,
                                    damping: 100
                                }
                                }}>
                                    <img className="parallax__img matlab" src={matlab} alt="matlab"></img>
                                </ParallaxMousemove.Layer>

                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.15,
                                yFactor: -.07,
                                springSettings: {
                                    stiffness: 50,
                                    damping: 100
                                }
                                }}>
                                    <img className="parallax__img go" src={go} alt="go"></img>
                                </ParallaxMousemove.Layer>

                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.15,
                                yFactor: -.07,
                                springSettings: {
                                    stiffness: 50,
                                    damping: 100
                                }
                                }}>
                                    <img className="parallax__img js" src={js} alt="js"></img>
                                </ParallaxMousemove.Layer>


                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: -0.24,
                                yFactor: -0.4,
                                springSettings: {
                                    stiffness: 50,
                                    damping: 100
                                }
                                }}>
                                    <img className="parallax__img opencv" src={opencv} alt="opencv"></img>
                                </ParallaxMousemove.Layer>

                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: -0.14,
                                yFactor: 0.17,
                                springSettings: {
                                    stiffness: 50,
                                    damping: 100
                                }
                                }}>
                                    <img className="parallax__img pytorch" src={pytorch} alt="pytorch"></img>
                                </ParallaxMousemove.Layer>

                        </ParallaxMousemove>
                    </div>
                </div>

                <div className="container__project">
                        <div className="project__card">
                                <a href="https://github.com/leo880714/sh122-homepage" target="_blank" rel="noreferrer"><img className="img__card" src={web} alt="personal website"></img></a>
                                <Link to="/" ><h3>Personal Portfolio Website</h3></Link>
                                <p> 
                                    The website you are currently looking at. Here, I render several techniques, using react as my backbone 
                                    and incorporating HTML, CSS, js, parallax effect... Wish you enjoy this web project.
                                </p>
                                <div className="link_card">
                                    <a className="links" href="https://github.com/leo880714/sh122-homepage" target="_blank" rel="noreferrer"> <BsGithub /></a>
                                </div>
                                
                        </div>

                        <div className="project__card">
                        <a href="https://github.com/aiiu-lab/StyleDNA" target="_blank" rel="noreferrer"><img className="img__card" src={styleDNA} alt="styleDNA"></img></a>
                                <a href="https://github.com/aiiu-lab/StyleDNA" target="_blank" rel="noreferrer"><h3>StyleDNA</h3></a>
                                <p> 
                                High-fidelity kinship face synthesis receives increasing interest for visual kinship 
                                applications, including law enforcement, social media analysis, finding lost children, etc. In this project, 
                                we leverage the pretrained state-of-the-art face synthesis model, StyleGAN2, to assist the synthesis. This project 
                                also got accepted by <a href="http://iab-rubric.org/fg2021/" target="_blank" rel="noreferrer">IEEE International Conference on Automatic Face and Gesture Recognition 2021 </a>.
                                </p>
                                <div className="link_card">
                                    <a className="links" href="https://github.com/aiiu-lab/StyleDNA" target="_blank" rel="noreferrer"> <BsGithub /></a>
                                    <a className="links" href="https://colab.research.google.com/drive/1FHf5ftbYtAfvODEqj5lp-S1cir44UniT?usp=sharing&fbclid=IwAR24xfMulbHCGlTAtjp0LP4rPO4IDFj-yY6XtktFv932HstnFYLtCnEHl00#scrollTo=OIGl-19F5VMS" target="_blank" rel="noreferrer"> <SiGooglecolab /></a>
                                    <a className="links" href="https://snac3.citi.sinica.edu.tw" target="_blank" rel="noreferrer"> <AiFillHome /></a> 
                                </div>
                        </div>

                        <div className="project__card">
                        <a href="https://github.com/michael5107414/CV_project" target="_blank" rel="noreferrer"><img className="img__card" src={videoframes} alt="videoframes"></img></a>
                                <a href="https://github.com/michael5107414/CV_project" target="_blank" rel="noreferrer"><h3>Video Frames Interpolation</h3></a>
                                <p> 
                                We designed a video interpolation pipeline and utilized techniques based on both deep-learning-based and non-deep-learning-based solutions. 
                                This projects also rewarded Second Prize in the final project competition held by the Department
                                of <a href="https://web.ee.ntu.edu.tw/eng/index.php" target="_blank" rel="noreferrer"> Electrical Engineering
                                </a> at <a href="https://www.ntu.edu.tw/english/index.html" target="_blank" rel="noreferrer"> Nation Taiwan University </a>
                                competition associated with <a href="https://www.mediatek.com/" target="_blank" rel="noreferrer">MediaTek</a> among 15 teams
                                </p>
                                <div className="link_card">
                                    <a className="links" href="https://github.com/michael5107414/CV_project" target="_blank" rel="noreferrer"> <BsGithub /></a>
                                </div>
                        </div>

                        <div className="project__card">
                        <a href="http://www.me.ntu.edu.tw/epaper/20200630/News_Photo_Content_n_44379_s_64996.html" target="_blank" rel="noreferrer"><img className="img__card" src={autocar} alt="personal website"></img></a>
                                <a href="http://www.me.ntu.edu.tw/capstone/" target="_blank" rel="noreferrer"><h3>Automatic Car Competition</h3></a>
                                <p> 
                                We designed and implemented an autonomous car that is capable of detecting other cars on the track, sidestepping
                                and cutting off cars through any track in the final competition. In the final exam copetition held  by 
                                the Department of  <a href="http://www.me.ntu.edu.tw/main.php?site_id=1" target="_blank" rel="noreferrer">
                                Mechanicla Engineering </a> at Nation Taiwan University, out team awarded First Prize in final project 
                                competition among 150 participants. 
                                </p>
                        </div>
                    </div>
            </section>
            
            <section>
                <Footer />         
            </section>
        </>
    )
}

export default Projects;