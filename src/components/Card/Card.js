import React from "react";

import "./Card.scss";

// welcome-card, experience-card, education-card, project-card
const Card = ({ type }) => {
  if (type === "welcome") {
    return (
      <div className="card">
        <div className="card-left">
          <div> Thomas Emilsson </div>
          <div> Software Engineer</div>
          <div> Test </div>
          <div> Socials </div>
        </div>
        <div className="card-right">Right</div>
      </div>
    );
  } else if (type === "experience") {
    return <div className="card"> Experience </div>;
  } else if (type === "education") {
    return <div className="card">Education</div>;
  } else if (type === "project") {
    return <div className="card">Project</div>;
  } else {
    return console.error("card-type doesn't match");
  }
};

export default Card;
