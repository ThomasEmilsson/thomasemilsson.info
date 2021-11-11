import React from "react";

import "./About.scss";

import CVObject from "../../CV.json";

const About = () => {
  let content = CVObject.Travels;

  return (
    <div id="about-me" className="about-me-div">
      <div className="about-me-header">About Me</div>
      {/* Horizontal Timeline Here - Scrollable */}
      {/* Turns into vertical list in smaller screens*/}
      <div className="timeline-div">
        <ul>
          {content.map(({ country, location, description, date }, index) => (
            <li key={index} className="timeline-item">
              <div>{location}</div>
              <div>{description}</div>
              <div>{date}</div>
              <Flag country={country} />
            </li>
          ))}
        </ul>
      </div>
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

const Flag = (props) => (
  <div className="flag">
    <label htmlFor={`flag-${props.country}`}>
      <img
        src={`${window.location.origin}/static/flags/${props.country}.png`}
        alt={`flag of ${props.country}`}
      />
    </label>
  </div>
);

export default About;
