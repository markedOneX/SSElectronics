import React from "react";
import Card from "./Card";

function Services() {
  const arr = [{ Card }];
  return (
    <div id="services" className="container">
      {arr.map((e) => (
        <Card />
      ))}
    </div>
  );
}

export default Services;
