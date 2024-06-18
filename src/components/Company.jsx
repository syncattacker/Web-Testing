import React from "react";

export default function Company(props) {
  return (
    <>
      <img src={props.source} alt={props.alt} className="company-logo" />
    </>
  );
}
