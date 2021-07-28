import React from "react";
import "./OptionDetail.scss";

const OptionDetail = ({ type, content }) => {
  if (type === "Experience") {
    return (
      <div className="option-detail-div">
        <div className="option-detail"> {content} </div>
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
  } else {
    return console.error("option-detail-type doesn't match");
  }
  return;
};

export default OptionDetail;
