import React from "react";
import { Link } from "react-router-dom";
export default function adminNavbar() {
  return (
    <div id="nav-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark py-5">
        <div className="container">
          <ul className="navbar-nav mx-auto fw-bold text-dark">
            <li className="nav-item mx-5">
              <Link to="/mrcadministration/messages" className="nav-link">
                Mesajlar
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
        </div>
      </nav>
    </div>
  );
}