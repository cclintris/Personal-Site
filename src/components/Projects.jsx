import React from "react";
import { Link } from "react-router-dom";
import "../style/projects.css";

import Footer from "./Footer";
import ParallaxMousemove from "react-parallax-mousemove";
import c from "../assets/icons/c.png";
import python from "../assets/icons/python.png";
import aws from "../assets/icons/aws.png";
import ts from "../assets/icons/ts.png";
import go from "../assets/icons/go.png";
import js from "../assets/icons/js.png";
import java from "../assets/icons/java.png";
import react from "../assets/icons/react.png";
import nodejs from "../assets/icons/nodejs.png";

import site from "../assets/projects/personal_site.png";
import aerb from "../assets/projects/aerb_logger.png";
import coinKG from "../assets/projects/coinKG.png";
import autocar from "../assets/projects/autocar.png";
import { BsGithub } from "react-icons/bs";

const style = {
  infoLayerStyle: {
    position: "relative",
    marginTop: "-60px",
  },
};

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="container container__header">
          <div className="text__container">
            <h4>A place to showcase myself</h4>
            <h1>That's what I got</h1>
          </div>

          <div className="">
            <ParallaxMousemove>
              <ParallaxMousemove.Layer
                layerStyle={style.infoLayerStyle}
                config={{
                  xFactor: 0.05,
                  yFactor: -0.15,
                  springSettings: {
                    stiffness: 50,
                    damping: 100,
                  },
                }}
              >
                <img className="parallax__img c" src={c} alt="c++"></img>
              </ParallaxMousemove.Layer>

              <ParallaxMousemove.Layer
                layerStyle={style.infoLayerStyle}
                config={{
                  xFactor: -0.25,
                  yFactor: -0.45,
                  springSettings: {
                    stiffness: 50,
                    damping: 100,
                  },
                }}
              >
                <img
                  className="parallax__img nodejs"
                  src={nodejs}
                  alt="nodejs"
                ></img>
              </ParallaxMousemove.Layer>

              <ParallaxMousemove.Layer
                layerStyle={style.infoLayerStyle}
                config={{
                  xFactor: 0.2,
                  yFactor: -0.25,
                  springSettings: {
                    stiffness: 50,
                    damping: 100,
                  },
                }}
              >
                <img className="parallax__img py" src={python} alt="py"></img>
              </ParallaxMousemove.Layer>

              <ParallaxMousemove.Layer
                layerStyle={style.infoLayerStyle}
                config={{
                  xFactor: -0.24,
                  yFactor: -0.17,
                  springSettings: {
                    stiffness: 50,
                    damping: 100,
                  },
                }}
              >
                <img
                  className="parallax__img react"
                  src={react}
                  alt="react"
                ></img>
              </ParallaxMousemove.Layer>

              <ParallaxMousemove.Layer
                layerStyle={style.infoLayerStyle}
                config={{
                  xFactor: -0.15,
                  yFactor: 0.15,
                  springSettings: {
                    stiffness: 50,
                    damping: 100,
                  },
                }}
              >
                <img className="parallax__img ts" src={ts} alt="ts"></img>
              </ParallaxMousemove.Layer>

              <ParallaxMousemove.Layer
                layerStyle={style.infoLayerStyle}
                config={{
                  xFactor: 0.15,
                  yFactor: -0.07,
                  springSettings: {
                    stiffness: 50,
                    damping: 100,
                  },
                }}
              >
                <img className="parallax__img go" src={go} alt="go"></img>
              </ParallaxMousemove.Layer>

              <ParallaxMousemove.Layer
                layerStyle={style.infoLayerStyle}
                config={{
                  xFactor: 0.15,
                  yFactor: -0.07,
                  springSettings: {
                    stiffness: 50,
                    damping: 100,
                  },
                }}
              >
                <img className="parallax__img js" src={js} alt="js"></img>
              </ParallaxMousemove.Layer>

              <ParallaxMousemove.Layer
                layerStyle={style.infoLayerStyle}
                config={{
                  xFactor: -0.24,
                  yFactor: -0.4,
                  springSettings: {
                    stiffness: 50,
                    damping: 100,
                  },
                }}
              >
                <img className="parallax__img aws" src={aws} alt="aws"></img>
              </ParallaxMousemove.Layer>

              <ParallaxMousemove.Layer
                layerStyle={style.infoLayerStyle}
                config={{
                  xFactor: -0.14,
                  yFactor: 0.17,
                  springSettings: {
                    stiffness: 50,
                    damping: 100,
                  },
                }}
              >
                <img className="parallax__img java" src={java} alt="java"></img>
              </ParallaxMousemove.Layer>
            </ParallaxMousemove>
          </div>
        </div>

        <div className="container__project">
          <div className="project__card">
            <a
              href="https://github.com/cclintris/Personal-Site"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img__card"
                src={site}
                alt="personal website"
              ></img>
            </a>
            <Link to="/">
              <h3>Personal Portfolio Website</h3>
            </Link>
            <p>
              The website you are currently looking at. Built with several
              rendering techniques, using React as my backbone frontend
              framework and incorporating HTML, CSS, js, parallax effect...
            </p>
            <div className="link_card">
              <a
                className="links"
                href="https://github.com/cclintris/Personal-Site"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsGithub />
              </a>
            </div>
          </div>

          <div className="project__card">
            <a
              href="https://github.com/cclintris/S1-AERB-Logger"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img__card" src={aerb} alt="aerb_logger"></img>
            </a>
            <a
              href="https://github.com/cclintris/S1-AERB-Logger"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Automatic Extendable Ring Buffer based Logger</h3>
            </a>
            <p>
              The logger module is an infrastructure microservice used by
              multiple microservices across the S1 project. It is based on an
              automatic(A) extendable(E) ring(R) buffer(B). Recommended to
              integrate S1-AERB-Logger with AWS CloudWatch for Cloud systems.
            </p>
            <div className="link_card">
              <a
                className="links"
                href="https://github.com/cclintris/S1-AERB-Logger"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsGithub />
              </a>
            </div>
          </div>

          <div className="project__card">
            <a
              href="https://github.com/cclintris/coinKG"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img__card"
                src={coinKG}
                alt="coin knowledge graph"
              ></img>
            </a>
            <a
              href="https://github.com/cclintris/coinKG"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Knowledge Graph Construction and Visualization System </h3>
            </a>
            <p>
              Knowledge graph definition + visualization system and a culinary
              dialogue system based on editable knowledge graphs : construct
              rudimentary graph tuples with the editors system provides, and
              capable of applying the constructed knowledge graph to a
              intelligent level, realizing knowledge graph semantics query,
              smart ask-question etc.
            </p>
            <div className="link_card">
              <a
                className="links"
                href="https://github.com/cclintris/coinKG"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsGithub />
              </a>
            </div>
          </div>

          <div className="project__card">
            <a
              href="http://www.me.ntu.edu.tw/epaper/20200630/News_Photo_Content_n_44379_s_64996.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img__card"
                src={autocar}
                alt="personal website"
              ></img>
            </a>
            <a
              href="http://www.me.ntu.edu.tw/capstone/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Automatic Car Competition</h3>
            </a>
            <p>
              We designed and implemented an autonomous car that is capable of
              detecting other cars on the track, sidestepping and cutting off
              cars through any track in the final competition. In the final exam
              copetition held by the Department of{" "}
              <a
                href="http://www.me.ntu.edu.tw/main.php?site_id=1"
                target="_blank"
                rel="noreferrer"
              >
                Mechanicla Engineering{" "}
              </a>{" "}
              at Nation Taiwan University, out team awarded First Prize in final
              project competition among 150 participants.
            </p>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Projects;
