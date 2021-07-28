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
        {content.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </div>
    );
  } else if (type === "Education") {
    return (
      <div className="option-detail-div">
        <div className="option-detail">{content}</div>
      </div>
    );
  } else if (type === "Skillset") {
    return (
      <div className="option-detail-div">
        <div className="option-detail">{content}</div>
      </div>
    );
  } else if (type === "Project") {
    return (
      <div className="option-detail-div">
        <div className="option-detail">{content}</div>
      </div>
    );
  } else {
    return console.error("option-detail-type doesn't match");
  }
  return;
};

export default OptionDetail;
