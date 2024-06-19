import React from "react";
import MobileBlock from "../img/MobileBlock.png";
import "../css/component-css/mobileblock.css";

const Optimizing = () => {
  return (
    <div className="block-mobile">
      <img
        src={MobileBlock}
        alt="Optimizing For Mobiles and Tablets"
        className="block-image"
      />
      <p className="reason">
        We Are Optimising Our Website for mobile and tablet users.
      </p>
      <p className="apolo">
        For any support reach us at{" "}
        <a href="mailto:support@cyberonites.com" className="support-channel">
          Support Channel.
        </a>
      </p>
    </div>
  );
};

export default Optimizing;
