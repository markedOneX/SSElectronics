import React from "react";
import { Link } from "react-router-dom";
import portrait from "../Design/Portrait.jpg";

function About() {
  return (
    <div>
      <h2 className="aboutwhite abttext">About Us</h2>
      <h3 className="abttext">25+ Years of Trust and Excellence</h3>
      <div id="about">
        <div>
          <p>
            Founded in 1994, Shree Sai Electronics is the pioneer in the
            electronics and repairing industry in Sangli district. We are still
            standing tall and serving the city with extensive constitution.
            Building trust among our customers and providing them with finest
            quality of service has always been our primary goal. Let us serve
            you too by fixing your hardware. Find out more about the{" "}
            <span>
              <Link to="/services">Services</Link>
            </span>{" "}
            we provide or get in{" "}
            <span>
              <Link to="/contact">Contact</Link>
            </span>{" "}
            with us to know more.
          </p>
        </div>
        <div className="portrait">
          <div>
            <img id="img" src={portrait} width="200" alt="" />
          </div>
          <div>
            <h5 className="infoAbt">Girish Adke</h5>
            <h6 className="infoAbt">Founder, Shree Sai Electronics</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
