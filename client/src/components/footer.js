import React, { Component } from "react";
import { Link } from "react-router-dom";
class footer extends Component {
  render() {
    return (
      <footer className="text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 my-5">
              <div className="card h-100 bg-transparent border-0">
                <ul className="list-group">
                  <li className="list-group-item bg-transparent text-white fs-sm fw-bold">
                    Yunus Emre Culfa
                  </li>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Profil
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Hizmet
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Gizlilik İlkeleri
                  </Link>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 my-5">
              <div className="card h-100 bg-transparent border-0">
                <ul className="list-group">
                  <li className="list-group-item bg-transparent text-white fs-sm fw-bold">
                    Sosyal Medya
                  </li>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Linkedin
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Pinterest
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Instagram
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Behance
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Aboutme
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 my-5">
              <div className="card h-100 bg-transparent border-0">
                <ul className="list-group">
                  <li className="list-group-item bg-transparent text-white fs-sm fw-bold">
                    Blog
                  </li>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Kişisel Blog
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Dosyalar
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 my-5">
              <div className="card h-100 bg-transparent border-0">
                <ul className="list-group">
                  <li className="list-group-item bg-transparent text-white fs-sm fw-bold">
                    İletişim
                  </li>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    e-Mail
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Telegram
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action bg-transparent text-white"
                  >
                    Discord
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
