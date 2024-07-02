import React from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink exact to="/" className="nav-links">
                Home
              </NavLink>
            </li>
            <li>
              <a href={props.aboutLink} className="nav-links">
                About
              </a>
            </li>
            <li>
              <a href={props.eventLink} className="nav-links">
                Events
              </a>
            </li>
            <li>
              <a href={props.upcomingLink} className="nav-links">
                Upcoming
              </a>
            </li>
            <li>
              <a href={props.contactLink} className="nav-links">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
