import React from "react";

import "./Project.scss";

const Project = (project) => {
  const { name, date, role, description, technologies } = project.project;

  return (
    <div
      className={`${
        description.length < 4 ? "project-div" : "project-div-bigger"
      }`}
    >
      <div className="project-title-div">
        <p className="project-name">{name}</p>
        <p className="project-separator">{"|"}</p>
        <p className="project-date">{date}</p>
      </div>
      <p className="project-role">{role}</p>
      {description.length > 0 ? (
        <ul className="project-description">
          {description.map((item, index) => (
            <li className="project-description-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {technologies != undefined ? (
        <div className="technologies">
          Technologies: <i>{technologies}</i>
        </div>
      ) : null}
    </div>
  );
};

export default Project;
