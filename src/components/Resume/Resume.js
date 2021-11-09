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
      <div className="resume-header"> Resume </div>

      <Experiences content={content.Experiences} />

      <div className="resume-separator"></div>

      <div className="resume-header">Studies</div>

      <Education content={content.Education} />

      <div className="resume-separator"></div>
    </div>
  );
};

export default Resume;
