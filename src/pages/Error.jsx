import React from "react";
import "../css/component-css/error.css";

export default function Error() {
  return (
    <>
      <section className="error">
        <div className="not-found">
          <p className="error-code">404</p>
          <p className="error-text">oops! page not found</p>
          <p className="sarcasm">
            Sorry! the page you are looking for does not exists. Are you trying
            to do something fishy or if you think something is broken{" "}
            <a href="mailto:support@cyberonites.com" className="mail-us">
              reach out to us.
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
