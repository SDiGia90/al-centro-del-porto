import React from "react";
import "./Navbar.css";
import logonavbar from "./logonavbar.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ms-2" href="/">
          <img
            src={logonavbar}
            width="60px"
            height="60px"
            alt="Al centro del Porto"
          />
          <span className="text-uppercase"> Al Centro del Porto</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#tindogmenu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="tindogmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Servizi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Prenota
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
