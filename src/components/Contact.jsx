import React from "react";
import "../css/general-css/global.css";
import "../css/component-css/contact.css";
import contactUs from "../img/contact-us.png";
import { IoMdMailUnread } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-heading">
          <p className="event-heading">CONTACT US</p>
          <h2 className="main-heading edit">Connect with Cyberonites Club</h2>
        </div>
        <div className="container grid grid-2-columns contact-gap">
          <div className="contact-div">
            <p className="contact-text">
              We're here to answer your questions and engage with cybersecurity
              enthusiasts like you! Reach out to us for inquiries about our club
              activities, collaborations, or any cybersecurity-related
              discussions. Whether you're a student, faculty member, or industry
              professional, we welcome your interest and participation.
            </p>
            <div className="contact-links">
              <div className="connect-icon-div">
                <a
                  href="mailto:contact@cyberonites.com"
                  className="style-a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoMdMailUnread className="connect-icon" />
                </a>
              </div>
              <div className="connect-icon-div">
                <a
                  href="https://www.linkedin.com/company/cyberonites-club"
                  className="style-a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="connect-icon" />
                </a>
              </div>
              <div className="connect-icon-div">
                <a
                  href="https://www.instagram.com/official_cyberonites/"
                  className="style-a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiInstagramFill className="connect-icon instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-image">
            <img
              src={contactUs}
              alt="Contact Information Of Cyberonites"
              className="contact-vector"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
