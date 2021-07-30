import React from "react";

import "./Experience.scss";

const Experience = (experience) => {
  const { name, date, role, description, location } = experience.experience;

  return (
    <div
      className={`${
        description.length < 4 ? "experience-div" : "experience-div-bigger"
      }`}
    >
      <div className="experience-title-div">
        <p className="experience-name">{name}</p>
        <p className="experience-separator">{"|"}</p>
        <p className="experience-date">{`${date}`}</p>
      </div>
      <div className="experience-role-div">
        <p className="experience-role">{role}</p>
        <p className="experience-separator">{"-"}</p>
        <p className="experience-location">{location}</p>
      </div>
      {description.length > 0 ? (
        <ul className="experience-description">
          {description.map((item, index) => (
            <li className="experience-description-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Experience;
