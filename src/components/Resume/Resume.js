import React, { useState } from "react";
import "../Content/Experience";

import "./Resume.scss";
import CVObject from "../../CV.json";
import { FaBriefcase } from "react-icons/fa";

const Resume = () => {
  let content = CVObject;

  let latin =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
  let latinShort =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
  let { name, date, role, description, location, technologies } =
    CVObject.Experience;

  return (
    <div className="resume-div">
      <div className="resume-separator"></div>
      <div className="resume-introduction-div">
        <div className="resume-title">Resume</div>
        <div className="resume-description">{latin}</div>
      </div>

      <div className="resume-experience-div">
        <ul>
          <li>
            <div className="resume-experience-icon">
              <FaBriefcase />
            </div>
          </li>
          <li>
            <div className="resume-experience-icon">
              <FaBriefcase />
            </div>
          </li>
        </ul>
        {/* <div className="resume-experience-icon">
          <FaBriefcase />
        </div> */}
        <div className="resume-experience-job">
          <div className="resume-experience-title-div">
            <p className="resume-experience-name">{name}</p>
            <p className="resume-experience-date">{`${date}`}</p>
          </div>
          <div className="resume-experience-job-role">Software Engineer</div>
          <div className="resume-experience-job-location">
            Sweden, Stockholm
          </div>
          <div className="resume-experience-job-description">{latinShort}</div>
        </div>
        <div className="resume-experience-technologies"></div>
      </div>
    </div>
  );
};

export default Resume;
