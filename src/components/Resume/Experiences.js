import React from "react";

import "./Experiences.scss";

import { FaBriefcase } from "react-icons/fa";

const Experiences = (content) => {
  //   const { name, date, role, description, location, technologies } = content;

  let experiences = content.content;

  let length = experiences.length;

  return (
    <div className="resume-experience-div">
      <ul>
        {experiences.map(
          (
            { name, date, role, description, location, technologies },
            index
          ) => (
            <li key={index} className="resume-experience-item">
              <div className="resume-experience-icon-div">
                {index + 1 != length ? (
                  <div className="resume-experience-icon draw-line">
                    <FaBriefcase />
                  </div>
                ) : (
                  <div className="resume-experience-icon">
                    <FaBriefcase />
                  </div>
                )}
                <p className="resume-experience-role-mobile">{role}&nbsp;</p>
                <p className="resume-experience-company-mobile">{name}</p>
              </div>
              <div className="resume-experience-details-div">
                <div className="resume-experience-title">
                  <p className="resume-experience-role">{role}</p>
                  <p className="resume-experience-company">{name}</p>
                  <p className="resume-experience-date">{date}</p>
                </div>
                <div className="resume-experience-description-div">
                  <div className="resume-experience-description">
                    {description.length > 0 ? (
                      <ul>
                        {description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <p className="resume-experience-description-location">
                    {location}
                  </p>
                </div>
                {/* {technologies != undefined ? (
                  <div className="technologies">
                    Technologies: <i>{technologies}</i>
                  </div>
                ) : null} */}
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Experiences;
