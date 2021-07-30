import React from "react";

import "./Education.scss";

const Education = (education) => {
  const { university, graduation, location, degree, thesis } =
    education.education;
  return (
    <div className="education-div">
      <p className="education-university">{university}</p>

      {graduation == null ? null : (
        <p className="education-graduation"> {"Graduated: " + graduation} </p>
      )}

      <div className="education-degree-div">
        <p className="education-degree">{degree}</p>
        <p className="education-location">{location}</p>
      </div>

      {thesis == null ? null : (
        <p className="education-thesis">
          <b>Thesis:</b> {thesis}
        </p>
      )}
    </div>
  );
};

export default Education;
