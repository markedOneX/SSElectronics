import React from "react";
import About from "./About";

function Hero() {
  return (
    <div className="box">
      <div className="hero">
        <div className="content">
          <h1 id="title">
            <span className="firstLetter">S</span>hree
            <span className="firstLetter"> S</span>ai
            <span className="firstLetter"> E</span>lectronics
          </h1>
          <h3 id="tagline">
            <i>Why fix it yourself? Leave it to the pros.</i>
          </h3>
        </div>
      </div>
      <div className="container">
        <About />
      </div>
    </div>
  );
}

export default Hero;
