import React, { useState } from "react";
import "../Content/Experience";

import "./Resume.scss";
import CVObject from "../../CV.json";
import Experiences from "./Experiences";
import Education from "./Education";

const Resume = () => {
  let content = CVObject;

  return (
    <div id="resume" className="resume-div">
      <div className="resume-separator"></div>
      <div className="resume-introduction-div">
        <div className="resume-title">Resume</div>
      </div>

      <Experiences content={content.Experiences} />

      <div className="resume-separator"></div>

      <div className="resume-introduction-div">
        <div className="resume-title">Studies</div>
      </div>

      <Education content={content.Education} />
    </div>
  );
};

export default Resume;
