import React from "react";
import "../css/general-css/global.css";
import "../css/component-css/footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-container footer-grid">
        <div className="logo-text">
          <h3 className="logo-footer">CY.</h3>
          <p className="footer-text">
            Empowering students with advanced cybersecurity knowledge and
            skills.
          </p>
          <p className="bold-text-footer">Be Powerful.</p>
        </div>
        <div className="footer-explore">
          <p className="footer-heading">Explore</p>
          <div className="links">
            <a href="#home" className="footer-links">
              Home
            </a>
            <a href="#contact" className="footer-links">
              Contact
            </a>
            <a href="#join" className="footer-links">
              Join Us
            </a>
            <a href="#sponsor" className="footer-links">
              Sponsor
            </a>
          </div>
        </div>
        <div className="footer-explore">
          <p className="footer-heading">Visit</p>
          <div className="address">
            <p className="address-footer">
              Cyberonites Club. GLA University NH - 2 Delhi Mathura Highway
              Mathura, India - 281406
            </p>
            <a
              href="https://maps.app.goo.gl/LeGLPZRsaxq4BcB19"
              className="maps-link"
            >
              See On MAPS
            </a>
          </div>
        </div>
        <div className="footer-explore">
          <p className="footer-heading">follow</p>
          <div className="links">
            <a
              href="https://www.instagram.com/official_cyberonites/"
              className="footer-links"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/cyberonites-glau/"
              className="footer-links"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://www.youtube.com/@cyberonitesclub/videos"
              className="footer-links"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
            <a href="mailto:support@cyberonites.com" className="footer-links">
              Support
            </a>
          </div>
        </div>
      </div>
      <div className="straight-line"></div>
      <div className="policy-copyright">
        <p className="copyright">© 2024 Cyberonites. All rights reserved.</p>
        <a
          href="https://www.freeprivacypolicy.com/live/af9fbbb5-1acc-481f-8d06-ac6b84b7a27c"
          className="maps-link"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
      </div>
    </section>
  );
}
