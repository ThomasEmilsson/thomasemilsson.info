import React from "react";
import "./OptionDetail.scss";

const OptionDetail = ({ type, content }) => {
  if (type === "Experience") {
    return <div className="card"> {type} </div>;
  } else if (type === "Education") {
    return <div className="card">{type}</div>;
  } else if (type === "Skillset") {
    return <div className="card">{type}</div>;
  } else {
    return console.error("card-type doesn't match");
  }
  return;
};

export default OptionDetail;
