import React, { Component } from "react";
import { Link } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <div className="py-5" id="nav-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light py-5 fixed-top">
          <div className="container pe-0">
            <Link to="/" className="navbar-brand fw-bold p-1">
              MRC
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto fw-bold text-dark">
                <li className="nav-item mx-5">
                  <Link to="/illustrasyon" className="nav-link">
                    İllustrasyon
                  </Link>
                </li>
                <li className="nav-item mx-5">
                  <Link to="/profile" className="nav-link">
                    Profil
                  </Link>
                </li>
                <li className="nav-item mx-5">
                  <Link to="/contact" className="nav-link">
                    İletişim
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item mx-0 fw-bold">
                  <Link to="#" className="nav-link">
                    <i className="fab fa-linkedin-in p-1"></i>
                  </Link>
                </li>
                <li className="nav-item mx-0 fw-bold">
                  <Link to="#" className="nav-link">
                    <i className="fab fa-pinterest-p p-1"></i>
                  </Link>
                </li>
                <li className="nav-item mx-0 fw-bold">
                  <Link to="#" className="nav-link">
                    <i className="fab fa-instagram p-1"></i>
                  </Link>
                </li>

                <li className="nav-item mx-0 fw-bold">
                  <Link to="#" className="nav-link">
                    <i className="fab fa-behance p-1"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
