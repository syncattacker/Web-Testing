import React from "react";
import "../css/general-css/global.css";
import "../css/component-css/hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiLaurelsTrophy } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero(props) {
  const joinUs = () => {
    window.location.href = "https://forms.gle/uy7Uneh2yZS7b1PA7";
  };
  const sponsorUs = () => {
    window.location.href = "https://forms.gle/Sxd2L3NAjWxcGfZA8";
  };
  return (
    <section className="hero" id="home">
      <div className="hero-container grid grid-center grid-2-columns hero-gap hero-padding">
        <div className="text">
          <p className="heading-primary">
            {props.tagline}
            <span className="special-text">{props.special}</span>
          </p>
          <p className="description">{props.description}</p>
          <div className="cta-buttons">
            <button
              type="button"
              onClick={joinUs}
              className="join-team"
              id="join"
            >
              Join Us <FaArrowRightLong />
            </button>
            <button
              type="button"
              onClick={sponsorUs}
              className="sponsor"
              id="sponsor"
            >
              Sponsor <GiLaurelsTrophy className="trophy" />
            </button>
          </div>
        </div>
        <div className="image">
          <img src={props.image} alt={props.alt} className="hero-image" />
        </div>
      </div>
      <div className="arrow">
        <a href="#main-content">
          <IoIosArrowDown className="arrow-down" />
        </a>
      </div>
    </section>
  );
}
