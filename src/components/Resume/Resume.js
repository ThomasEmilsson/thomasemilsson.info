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
          <li className="resume-experience-item">
            <div className="resume-experience-icon-div">
              <div className="resume-experience-icon">
                <FaBriefcase />
              </div>
              <p className="resume-experience-role-mobile">
                {" "}
                Web Developer&nbsp;
              </p>
              <p className="resume-experience-company-mobile">
                {` at Empower & Lead`}
              </p>
            </div>
            <div className="resume-experience-details-div">
              <div className="resume-experience-title">
                <p className="resume-experience-role">Web Developer </p>
                <p className="resume-experience-company"> at Empower & Lead</p>
                <p className="resume-experience-date">
                  July 2019 - November 2019
                </p>
              </div>
              <div className="resume-experience-description-div">
                <p className="resume-experience-description-location">
                  Stockholm, Sweden
                </p>
                <p className="resume-experience-description">
                  <ul>
                    <li>
                      Coordinated closely with designer and delivered finished
                      product on a deadline
                    </li>
                    <li>
                      Communicated and presented work modularly, allowing for
                      adjustments based on feedback/concerns
                    </li>
                  </ul>
                </p>
                <p className="resume-experience-description-location"></p>
              </div>
            </div>
          </li>
          <li className="resume-experience-item">
            <div className="resume-experience-icon">
              <FaBriefcase />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
