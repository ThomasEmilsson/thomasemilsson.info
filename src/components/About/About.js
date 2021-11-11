import React from "react";

import "./About.scss";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CVObject from "../../CV.json";

const About = () => {
  let travels = CVObject.Travels;

  let length = travels.length;

  return (
    <div id="about-me" className="about-me-div">
      <div className="about-me-header">About Me</div>
      {/* Horizontal Timeline Here - Scrollable */}
      {/* Turns into vertical list in smaller screens*/}
      <div className="timeline-div">
        <FaChevronLeft className="timeline-left" />
        <div className="timeline-scroll-div">
          {travels.map(({ country, location, description, date }, index) => (
            <div key={index} className="timeline-item">
              <div>{location}</div>
              <div>{description}</div>
              <div>{date}</div>
              <Flag country={country} />
            </div>
          ))}
        </div>
        <FaChevronRight className="timeline-right" />
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
