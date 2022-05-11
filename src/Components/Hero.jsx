import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="content">
          <h1 id="title">
            <span className="firstLetter">S</span>hree
            <span className="firstLetter"> S</span>ai
            <span className="firstLetter"> E</span>lectronics
          </h1>
          <h3 id="tagline">
            <i>Everything that is broken can be fixed!</i>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Hero;
