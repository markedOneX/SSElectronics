import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand">S S E</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ms-auto">
              <li>
                <a class="nav-link" aria-current="page" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a class="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
