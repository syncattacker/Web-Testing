import React from "react";
import "../css/general-css/global.css";
import "../css/component-css/security.css";
import BugImage from "../img/events/Bug-Bounty.png";
import Introduction from "../img/events/introduction.png";
import Scope from "../img/events/scope.png";
import Unauth from "../img/events/unauthorized.png";
import Accept from "../img/events/accept.png";
import Footer from "../components/Footer";
import Award from "../img/events/awards.png";
import safeHarbour from "../img/events/safe-harbour.png";
import { RxCross1 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import CodeOfConduct from "../docs/Code.pdf";

export default function Security() {
  const report = () => {
    window.location.href = "https://forms.gle/nZRaqMuPKAqTVJk28";
  };
  return (
    <>
      <section className="security">
        <section className="main">
          <div className="main-bug">
            <div className="container grid grid-2-columns align">
              <div className="image-bug">
                <img
                  src={BugImage}
                  alt="Cyberonites Bug Bounty Program"
                  className="bug-image"
                />
              </div>
              <div className="text-bug">
                <p className="bug-heading">
                  <span className="bold-our">Our</span>
                  <br />{" "}
                  <span className="disclose">
                    Vulnerability Disclosure Program
                  </span>
                </p>
                <p className="reward">
                  To ensure a streamlined and efficient review process, only
                  reports submitted through our designated contact form will be
                  considered for evaluation and potential inclusion in our Hall
                  of Fame.
                </p>
                <button type="button" className="submit" onClick={report}>
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="introduction">
          <div className="container grid grid-2-columns align">
            <div className="security-intro">
              <p className="security-headings">Introduction</p>
              <p className="security-text">
                As one of the fastest-growing tech club, Cyberonites is
                dedicated to securing millions of careers and future
                aspirations. While we strive to protect our users, we invite
                security researchers and bug hunters to help secure Cyberonites.
                Our goals are scalability, reliability, and security. Despite
                our robust in-house security measures, we value peer review from
                the technical community. We take every vulnerability disclosure
                seriously. If you want to be our "extra pair of eyes," read on!
              </p>
            </div>
            <div className="security-intoimage">
              <img
                src={Introduction}
                alt="Introduction To Cyberonites Security Program"
                className="sec-introimage"
              />
            </div>
            <div className="security-intoimage">
              <img
                src={Scope}
                alt="Introduction To Cyberonites Security Program"
                className="sec-introimage"
              />
            </div>
            <div className="security-intro">
              <p className="security-headings">Scope</p>
              <p className="security-text">
                <ul className="scope-define">
                  <li>TARGET : cyberonites.com/*</li>
                </ul>
                Our target in scope includes the comprehensive defense of our
                applications, and data against an evolving array of cyber
                threats.
                <br />
                Any endpoint or asset not explicitly mentioned in the scope,
                including vendor endpoints, third-party application endpoints,
                or internal and external endpoints belonging to the Cyberonites
                domain, is strictly off-limits for testing purposes. This
                applies to all phases of the MITRE ATT&CK framework and the
                Lockheed Martin Cyber Kill Chain.
              </p>
            </div>
            <div className="security-intro">
              <p className="security-headings">Unauthorized</p>
              <p className="security-text">
                Any type of{" "}
                <span className="focus">Denial of Service (DoS)</span> or
                <span className="focus">
                  {" "}
                  Distributed Denial of Service (DDoS)
                </span>{" "}
                attacks, whether conducted with automated scanners or manually,
                are strictly prohibited.{" "}
                <span className="focus">Brute-forcing</span> and dictionary
                attacks are also banned.{" "}
                <span className="focus">Social engineering</span> techniques are
                explicitly forbidden. These restrictions are in place to
                safeguard the integrity, availability, and confidentiality of
                systems and data, ensuring that all security testing activities
                are conducted responsibly and within ethical boundaries.
              </p>
            </div>
            <div className="security-intoimage">
              <img
                src={Unauth}
                alt="Introduction To Cyberonites Security Program"
                className="sec-introimage"
              />
            </div>
            <div className="security-intoimage">
              <img
                src={Accept}
                alt="Introduction To Cyberonites Security Program"
                className="sec-introimage"
              />
            </div>
            <div className="security-intro">
              <p className="security-headings">Accepted Bugs</p>
              <p className="security-text">
                Cyberonites accepts any vulnerability, whether part of the OWASP
                Top 10 or SANS 25, provided they are directly associated with
                systems in scope, are unique (not previously reported), and are
                not classified as P5 issues according to Bugcrowd’s
                VRT/Vulnerability Rating taxonomy. The following vulnerabilities
                are not accepted:
              </p>
              <ul className="bugs-naccept grid grid-3-column">
                <li className="flex-col">
                  <RxCross1 className="naccept-icon" />
                  <p>Insecure Cookies</p>
                </li>
                <li className="flex-col">
                  <RxCross1 className="naccept-icon" />
                  <p>Known Issues</p>
                </li>
                <li className="flex-col">
                  <RxCross1 className="naccept-icon" />
                  <p>Intended Functionalities</p>
                </li>
                <li className="flex-col">
                  <RxCross1 className="naccept-icon" />
                  <p>HTTP Errors</p>
                </li>
                <li className="flex-col">
                  <RxCross1 className="naccept-icon" />
                  <p>Public File Disclosure</p>
                </li>
                <li className="flex-col">
                  <RxCross1 className="naccept-icon" />
                  <p>Clickjacking Restrictions</p>
                </li>
                <li className="flex-col">
                  <RxCross1 className="naccept-icon" />
                  <p>Error Message</p>
                </li>
                <li className="flex-col">
                  <RxCross1 className="naccept-icon" />
                  <p>Fingerprinting</p>
                </li>
                <li className="flex-col">
                  <RxCross1 className="naccept-icon" />
                  <p>Duplicate Reports</p>
                </li>
              </ul>
            </div>
            <div className="security-intro">
              <p className="security-headings">Rewards</p>
              <p className="security-text">
                If your findings adhere to our accepted vulnerabilities criteria
                without violating our expectations, we appreciate your effort
                and time. You will be acknowledged in our Hall of Fame and
                Acknowledgement Certificate. You may publicly disclose your
                findings for educational purposes after we resolve the issue and
                notify you. Cyberonites currently does not offer cash rewards
                for vulnerability disclosures but plans to introduce them in the
                future.
              </p>
            </div>
            <div className="security-intoimage">
              <img
                src={Award}
                alt="Introduction To Cyberonites Security Program"
                className="sec-introimage"
              />
            </div>
            <div className="security-intoimage">
              <img
                src={safeHarbour}
                alt="Introduction To Cyberonites Security Program"
                className="sec-introimage"
              />
            </div>
            <div className="security-intro">
              <p className="security-headings">Safe Harbour</p>
              <p className="security-text">
                When conducting vulnerability research, according to this
                policy, we consider this research conducted under this policy to
                be:
                <ul className="safe">
                  <li className="flex-col mr-md">
                    <IoMdCheckmark className="check-icon" />
                    <p className="safe-points">
                      Authorized no legal action for accidental, good-faith
                      violations.
                    </p>
                  </li>
                  <li className="flex-col mr-md">
                    <IoMdCheckmark className="check-icon" />
                    <p className="safe-points">
                      Authorized under anti-circumvention laws; waive claims for
                      bypassing tech controls.
                    </p>
                  </li>
                  <li className="flex-col mr-md">
                    <IoMdCheckmark className="check-icon" />
                    <p className="safe-points">
                      Exempt from TOS/AUP restrictions limiting security
                      research, on a limited basis.
                    </p>
                  </li>
                  <li className="flex-col mr-md">
                    <IoMdCheckmark className="check-icon" />
                    <p className="safe-points">
                      Conducted lawfully, enhancing Cyberonites's security, in
                      good faith.
                    </p>
                  </li>
                  <li className="flex-col mr-md">
                    <IoMdCheckmark className="check-icon" />
                    <p className="safe-points">
                      Adhere to all laws; compliance affirmed if legal action
                      arises.
                    </p>
                  </li>
                  <li className="flex-col mr-md">
                    <IoMdCheckmark className="check-icon" />
                    <p className="safe-points">
                      No authorization for third-party activities without
                      written consent; disclaim liability.
                    </p>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
        <section className="confidentiality">
          <div className="container">
            <p className="conf-heading">Confidentiality & Code of Conduct</p>
            <p className="security-text">
              We will maintain confidentiality and exclusivity in the disclosure
              and remediation process. Likewise, you shall also maintain
              confidentiality and shall handle information including but not
              limited to description of vulnerability, shared findings, report,
              etc. with strict confidentiality. You shall not disclose any
              related information to third parties without written permission
              from our team.
            </p>
            <a href={CodeOfConduct} download="Code.pdf" className="code">
              Code Of Conduct
            </a>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
