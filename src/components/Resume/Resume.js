import React, { useState } from "react";
import "../Content/Experience";

import "./Resume.scss";
import CVObject from "../../CV.json";
import Experiences from "./Experiences";

const Resume = () => {
  let content = CVObject;

  let latin =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
  let latinShort =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

  // content.Experiences.forEach((data) => console.log(data));
  // console.log(content.Experience);

  return (
    <div className="resume-div">
      <div className="resume-separator"></div>
      <div className="resume-introduction-div">
        <div className="resume-title">Resume</div>
        <div className="resume-description">{latin}</div>
      </div>

      <Experiences content={content.Experiences} />
    </div>
  );
};

export default Resume;
