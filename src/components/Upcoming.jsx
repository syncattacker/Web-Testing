import React from "react";
import "../css/component-css/upcoming.css";
import "../css/general-css/global.css";
import escalateX from "../img/event-videos/escalateX.mp4";
import { useState } from "react";

export default function Upcoming() {
  const [resultText, setResultText] = useState("");
  const handleEvent = () => {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    let textToShow = "";
    if (date === 18 && monthIndex === 7) {
      textToShow = "Hurray! Redirecting";
    } else {
      textToShow = "Oops! Event Registration Will Open Soon!";
    }
    setResultText(textToShow);
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
          <p className="event-notify">{resultText}</p>
        </div>
      </div>
    </section>
  );
}
