import React from "react";
import "../css/component-css/navbar.css";

export default function Navbar(props) {
  return (
    <section className="navigation-header">
      <header className="header">
        <div className="logo">
          <img src={props.logo} alt={props.text} className="logo" />
        </div>
        <nav className="navigation">
          <ul className="nav-elements">
            <li>
              <a href="#home" className="nav-links">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-links">
                About
              </a>
            </li>
            <li>
              <a href="#events" className="nav-links">
                Events
              </a>
            </li>
            <li>
              <a href="#upcoming-events" className="nav-links">
                Upcoming
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-links">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
