import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import "../style/posts.css";

const Posts = () => {
  return (
    <>
      <section id="posts">
        <div className="container container__posts">
          <div className="text__container">
            <h4>A place to exchange ideas and tech knowledge ...</h4>
            <h2>The more the merrier</h2>
          </div>
        </div>

        <div className="container container__posts"></div>

        <Footer />
      </section>
    </>
  );
};

export default Posts;
