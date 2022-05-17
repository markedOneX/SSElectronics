import React from "react";
import FormBox from "./FormBox";
import Map from "./Map";
import Phone from "./Phone";

function Contact() {
  return (
    <div id="contact" className="container">
      <FormBox />
      <Phone />
      <Map />
    </div>
  );
}

export default Contact;
