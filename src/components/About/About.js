import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div id="about-me" className="about-me-div">
      <div className="about-me-header">About Me</div>

      {/* Horizontal Timeline Here - Scrollable */}
      {/* Turns into vertical list in smaller screens*/}
    </div>
  );
};

const ReadOnlyCheckBox = ({ title, status, indent }) => {
  const doNothing = (event) => {
    event.target.checked = !event.target.checked;
  };

  return (
    <div className={`indent-${indent}`}>
      <label>
        <input type="checkbox" onChange={doNothing} checked={status} />
        <span>{title}</span>
      </label>
    </div>
  );
};

export default About;
