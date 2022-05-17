import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="cardBox">
      {/* ------------1------------------ */}
      <div className="row row1">
        <div
          class="card col-4"
          style={{ width: "15rem", height: "min-content", padding: "30px" }}
        >
          <img
            class="card-img-top"
            src="https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">LED/LCD</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/contact" class="btn btn-primary">
              Enquire
            </Link>
          </div>
        </div>

        <div
          class="card col-4"
          style={{ width: "15rem", height: "min-content", padding: "30px" }}
        >
          <img
            class="card-img-top"
            src="https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Photo Cameras</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/contact" class="btn btn-primary">
              Enquire
            </Link>
          </div>
        </div>

        <div
          class="card col-4"
          style={{ width: "15rem", height: "min-content", padding: "30px" }}
        >
          <img
            class="card-img-top"
            src="https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Video Cameras</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/contact" class="btn btn-primary">
              Enquire
            </Link>
          </div>
        </div>
      </div>

      <div className="row row2">
        <div
          class="card col-6"
          style={{ width: "15rem", height: "min-content", padding: "30px" }}
        >
          <img
            class="card-img-top"
            src="https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Legacy Hardware</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/contact" class="btn btn-primary">
              Enquire
            </Link>
          </div>
        </div>

        <div
          class="card col-6"
          style={{ width: "15rem", height: "min-content", padding: "30px" }}
        >
          <img
            class="card-img-top"
            src="https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Other</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/contact" class="btn btn-primary">
              Enquire
            </Link>
          </div>
        </div>
      </div>

      {/* -------------5------------------- */}
    </div>
  );
}

export default Card;
