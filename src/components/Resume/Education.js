import React from "react";

import "./Education.scss";
import { FaGraduationCap } from "react-icons/fa";

const Education = (content) => {
  let education = content.content;

  let length = education.length;

  return (
    <div className="resume-education-div">
      <ul>
        {education.map(
          ({ university, graduation, location, degree, thesis }, index) => (
            <li key={index} className="resume-education-item">
              <div className="resume-education-icon-div">
                {index + 1 != length ? (
                  <div className="resume-education-icon draw-line">
                    <FaGraduationCap />
                  </div>
                ) : (
                  <div className="resume-education-icon">
                    <FaGraduationCap />
                  </div>
                )}
                <p className="resume-education-role-mobile">{degree}&nbsp;</p>
                <p className="resume-education-university-mobile">
                  {university}
                </p>
              </div>
              <div className="resume-education-details-div">
                <div className="resume-education-title">
                  <p className="resume-education-role">{degree}</p>
                  <p className="resume-education-university">{university}</p>
                  <p className="resume-education-date">{graduation}</p>
                </div>

                {thesis == null ? null : (
                  <p className="">
                    <b>Thesis:</b> {thesis}
                  </p>
                )}
                <p className="resume-education-description-location">
                  {location}
                </p>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Education;
