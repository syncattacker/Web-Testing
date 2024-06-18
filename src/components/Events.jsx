import React from "react";
import "../css/general-css/global.css";
import "../css/component-css/events.css";
import Card from "./Card";
import webSecPro from "../img/events/WebSecPro.jpeg";
import CyberonitesSecurityFest from "../img/events/CyberonitesSecurityFest.png";
import ITMela from "../img/events/ITMela.jpeg";
import Cybersphere from "../img/events/Cybersphere.jpeg";
import youCanHack from "../img/events/youCanHack.png";
import NetworkInterception from "../img/events/NetworkInterception.png";

// TODO : Fix The Images

export default function Events() {
  const eventData = [
    {
      eventID: 1,
      source: youCanHack,
      alt: "Educational and Capture the flag event at Cyberonites Club",
      category: "OWASP EVENT",
      eventName: "you can hack",
      date: "05.11.22",
      audience: 100,
      description:
        "The “You Can Hack” event, featuring Mr. Ritaj Sharma from Deloitte, focused on bug bounty hunting. It delved into how ethical hackers identify and report software vulnerabilities to organizations for monetary rewards.",
    },
    {
      eventID: 2,
      source: NetworkInterception,
      alt: "Network Interception event at Cyberonites Club",
      category: "WORKSHOP",
      eventName: "network interception",
      date: "12.11.22",
      audience: 100,
      description:
        "The workshop, led by EC-Council certified instructor and cybersecurity expert Mr. A.M Pachouri, focused on educating students about cell phone call interception by hackers and offered a glimpse into a cybersecurity career.",
    },
    {
      eventID: 3,
      source: ITMela,
      alt: "IT MELA held at GLA University and Cyberonites Club's Participation",
      category: "MELA",
      eventName: "IT MELA",
      date: "18.03.23",
      audience: 120,
      description:
        "IT MELA, organized by club ABACUS of GLA University on 18th March 2023, was a thrilling event that encouraged the students to learn various topics. The Club Cyberonites placed third among all the other clubs.",
    },
    {
      eventID: 4,
      source: webSecPro,
      alt: "WebSecPro : A Web Application Workshop conducted by Cyberonites Club",
      category: "Workshop",
      eventName: "WebSecPro",
      date: "08.04.23",
      audience: 100,
      description:
        "The workshop 'WebSecPro: A Web Application Workshop' was organized by Club Cyberonites, the official cyber security club of GLA University, giving the participants a deep insight on web application penetration testing.",
    },
    {
      eventID: 5,
      source: Cybersphere,
      alt: "Cybersphere workshop at Cyberonites Club",
      category: "WORKSHOP",
      eventName: "CYBERSPHERE",
      date: "04.11.23",
      audience: 50,
      description:
        "The workshop CyberSphere: Empower, Educate, Secure. The event was split into two sessions. Owasp Top 10 vulnerabilities, career guidance for cyber security, phishing, email spoofing, SQL injection, case study of AIIMS ransomware, Wi-Fi hacking were the various topics",
    },
    {
      eventID: 6,
      source: CyberonitesSecurityFest,
      alt: "The Cyberonites Security Fest 2K24 Event Details",
      category: "FEST",
      eventName: "Security Fest 2K24",
      date: "19.01.24",
      audience: "N/A",
      description:
        "The Cyberonites Security Fest 2K24, was a magnificent and educative event. The students were divided into three groups based on their preferences for Digital Forensics, Web Application Penetration Testing, and Network Penetration Testing. A talk on OSINT was also conducted.",
    },
  ];
  return (
    <section className="events" id="main-content">
      <div className="container">
        <div className="headings">
          <p className="event-heading">event archives</p>
          <h2 className="main-heading">
            Discover Our Past Events and Innovations.
          </h2>
        </div>
        <div className="event-archives grid grid-3-columns gap">
          {eventData.map((events) => (
            <Card eventObject={events} key={events.eventID} />
          ))}
        </div>
      </div>
      <div className="btn">
        <a href="#upcoming-events" className="explore-events">
          Explore Events
        </a>
      </div>
    </section>
  );
}
