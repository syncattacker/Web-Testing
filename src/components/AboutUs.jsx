import "../css/component-css/about.css";
import "../css/general-css/global.css";
import teamwork from "../img/teamwork/teamwork.jpg";
import { TfiTarget } from "react-icons/tfi";
import { MdOutlineGroups } from "react-icons/md";
import { SiStorybook } from "react-icons/si";

export default function AboutUs() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-heading">
          <p className="event-heading">know us</p>
          <h2 className="main-heading">Fostering Cybersecurity Excellence.</h2>
        </div>
        <div className="container grid grid-2-columns about-gap">
          <div className="mission-text">
            <div className="mission">
              <div className="icon">
                <TfiTarget className="target" />
              </div>
              <div>
                <p className="m-text">Mission</p>
              </div>
            </div>
            <div>
              <p className="m-desc">
                At Cyberonites Club, our mission is to foster a community of
                passionate tech enthusiasts dedicated to exploring and advancing
                the field of cybersecurity. We aim to provide our members with
                the knowledge, skills, and experiences needed to excel in the
                ever-evolving digital landscape.
              </p>
            </div>
            <div className="mission who">
              <div className="icon">
                <MdOutlineGroups className="target" />
              </div>
              <div>
                <p className="m-text">Mission</p>
              </div>
            </div>
            <div>
              <p className="m-desc">
                Cyberonites Club is a vibrant and diverse group of students,
                professionals, and hobbyists who share a common interest in
                cybersecurity. Founded in 2016, our club has grown into a
                supportive network where members collaborate, learn, and
                innovate.
              </p>
            </div>
            <div className="mission story">
              <div className="icon">
                <SiStorybook className="target" />
              </div>
              <div>
                <p className="m-text">our story</p>
              </div>
            </div>
            <div>
              <p className="m-desc">
                The Cyberonites Club was established with a vision to create a
                platform for like-minded individuals to come together and delve
                into the world of cybersecurity. From humble beginnings as a
                small group of enthusiasts, we have expanded to include regular
                workshops, guest lectures, hackathons, and collaborative
                projects.
              </p>
            </div>
          </div>
          <div className="images">
            <img
              src={teamwork}
              alt="Meet the team cyberonites, their goals and vision at GLA University"
              className="teamwork"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
