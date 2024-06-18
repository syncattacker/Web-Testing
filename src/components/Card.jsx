import React from "react";
import "../css/component-css/card.css";

export default function Card({ eventObject }) {
  return (
    <div className="card">
      <img
        src={eventObject.source}
        alt={eventObject.alt}
        className="card-image"
      />
      <div className="event-information">
        <div className="categories">
          <span className="category">{eventObject.category}</span>
        </div>
        <div className="event-name">
          <p className="event-header">{eventObject.eventName}</p>
        </div>
        <div className="desc">
          <p className="event-description">{eventObject.description}</p>
        </div>
        <div className="info">
          <div className="event-detail">
            <span className="detail">{eventObject.date}</span>
            <span className="type">EVENT DATE</span>
          </div>
          <div className="bar"></div>
          <div className="audience-details">
            <span className="detail">{eventObject.audience}</span>
            <span className="type">PARTICIPATION</span>
          </div>
        </div>
      </div>
    </div>
  );
}
