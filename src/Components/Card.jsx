import React from "react";
import { Link } from "react-router-dom";

function Card({ title, desc, src }) {
  return (
    <div>
      <div className="card mx-auto" id="card">
        <img
          src={src}
          className="card-img-top"
          alt="Images will display here"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <Link to="/contact" className="btn btn-primary mt-auto">
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
