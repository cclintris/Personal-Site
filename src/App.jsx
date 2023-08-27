import React from "react";
import { Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Posts from "./components/Posts";

const Cursor = () => {
  return (
    <div className="cursor__dot">
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="255, 255 ,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      {/* {Cursor()} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
};

export default App;
