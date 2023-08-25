import React from "react";
import CTA from "./CTA";
import "../style/about.css";
import ME_1 from "../assets/meee.png";
import { FaUniversity, FaUser, FaHotjar } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME_1} alt="About img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5> Education</h5>
              <div>
                <small>
                  Master of Information Technology @ Carnegie Mellon University{" "}
                </small>
                <small>
                  Bachelor of Software Engineering @ Nanjing University{" "}
                </small>
              </div>
            </article>

            <article className="about__card">
              <FaUser className="about__icon" />
              <h5>Location</h5>
              <div>
                <small>Born in Pleasanton, CA</small>
                <small>Currently based in Mountain View, CA</small>
              </div>
            </article>

            <article className="about__card">
              <FaHotjar className="about__icon" />
              <h5>Interests</h5>
              <div>
                <small>Software Engineering, Sports, Music, Traveling...</small>
              </div>
            </article>
          </div>

          <p>
            Hi friends, welcome, I am Tristan. You could also call me Tris. I am
            currently studying for my Master's degree in software engineering
            related fields. Grown up in Taiwan and now based at California. I
            enjoy embracing diverse cultures and new challenges on a daily
            basis. Traveling around is always a favorite.
          </p>

          <p>
            As a student majoring in CS/SE, I am equipped with solid knowledge
            of computer science and practical experiences in software
            engineering. If you'd like to cooperate with me or work on cool
            projects, please don't hesitate to reach out.
          </p>
          <CTA />
          {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
        </div>
      </div>
    </section>
  );
}

export default About;
