import React, { useState } from "react";
import "../Content/Experience";

import "./Resume.scss";
import CVObject from "../../CV.json";
import Experiences from "./Experiences";

const Resume = () => {
  let content = CVObject;

  return (
    <div className="resume-div">
      <div className="resume-separator"></div>
      <div className="resume-introduction-div">
        <div className="resume-title">Resume</div>
        <div className="resume-description">{}</div>
      </div>

      <Experiences content={content.Experiences} />
    </div>
  );
};

export default Resume;
