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
          <div className="event-card">
            <p className="event-up-name">EscalateX</p>
            <p className="event-intro">
              EscalateX is to provide participants with a comprehensive learning
              experience in the field of cybersecurity. Through the Capture The
              Flag (CTF) competition on the first day, participants will engage
              in hands-on challenges that simulate real-world cybersecurity
              scenarios. This practical approach aims to enhance their
              problem-solving skills, critical thinking abilities, and technical
              proficiency in areas such as ethical hacking, network security,
              cryptography, and digital forensics.
            </p>
          </div>
          <div className="event-break-up">
            <div className="event-headers">
              <p className="event-header-main">event details</p>
            </div>
            <div className="event-detail-card grid grid-2-columns">
              <div className="day">
                <div className="dates">
                  <p className="date">14.09.24</p>
                  <p className="event-date-data">DATE</p>
                </div>
                <div className="information-events">
                  <p className="name-of-event">Guest Lecture Series</p>
                  <ul className="lecture-series">
                    <li className="lecture-breakdown">
                      <p className="lecture-name">Reverse Engineering</p>
                      <p className="lecture-time">10:00 am – 12:00 pm</p>
                    </li>
                    <li className="lecture-breakdown">
                      <p className="lecture-name">Lunch/Refreshment Break</p>
                      <p className="lecture-time">12:00 pm - 1:00 pm</p>
                    </li>
                    <li className="lecture-breakdown">
                      <p className="lecture-name">
                        Web Application Penetration Testing
                      </p>
                      <p className="lecture-time">1:00 pm – 3:00 pm</p>
                    </li>
                    <li className="lecture-breakdown">
                      <p className="lecture-name">Hardware Hacking</p>
                      <p className="lecture-time"> 3:00 pm – 5:00 pm</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="day">
                <div className="dates">
                  <p className="date">15.09.24</p>
                  <p className="event-date-data">DATE</p>
                </div>
                <div className="information-events">
                  <p className="name-of-event">EscalateX CTF Challenge</p>
                  <p className="event-timing">10.00 A.M - 3.00 P.M</p>
                </div>
              </div>
            </div>
          </div>
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
