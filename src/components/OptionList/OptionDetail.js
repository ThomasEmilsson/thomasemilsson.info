import React from "react";
import "./OptionDetail.scss";
import Experience from "../Content/Experience";
import Education from "../Content/Education";
import Skillset from "../Content/Skillset";
import Project from "../Content/Project";

const OptionDetail = ({ type, content }) => {
  if (type === "Experience") {
    return (
      <div className="option-detail-div">
        {/* <p className="option-detail-title">Experiences: </p> */}
        {content.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </div>
    );
  } else if (type === "Education") {
    return (
      <div className="option-detail-div">
        {content.map((education, index) => (
          <Education key={index} education={education} />
        ))}
      </div>
    );
  } else if (type === "Skillset") {
    return (
      <div className="option-detail-div">
        <Skillset content={content} />
      </div>
    );
  } else if (type === "Project") {
    return (
      <div className="option-detail-div">
        {content.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    );
  } else {
    return console.error("option-detail-type doesn't match");
  }
};

export default OptionDetail;
