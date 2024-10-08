import React from "react";
import "../css/component-css/upcoming.css";
import "../css/general-css/global.css";
import escalateX from "../img/event-videos/escalateX.mp4";

export default function Upcoming() {
  const handleEvent = () => {
    window.location.href = "https://multigrad.in/gla-cyberonites";
  };

  return (
    <section className="upcoming-events" id="upcoming-events">
      <div className="container">
        <div className="upcoming-heading">
          <p className="event-heading">upcoming events</p>
          <h2 className="main-heading">Elevating Cybersecurity Standards</h2>
        </div>
        <div className="event-view">
          <video typeof="video/mp4" loop autoPlay muted className="event-view">
            <source src={escalateX} type="video/mp4" />
          </video>
        </div>
        <div className="register-btn">
          <button
            type="button"
            className="explore-events other"
            onClick={handleEvent}
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </section>
  );
}
