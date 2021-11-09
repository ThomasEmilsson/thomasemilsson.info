import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div>
      <ReadOnlyCheckBox title="test" status={true} />
    </div>
  );
};

const ReadOnlyCheckBox = ({ title, status }) => {
  const doNothing = (event) => {
    event.target.checked = !event.target.checked;
  };

  return (
    <label>
      <input type="checkbox" onChange={doNothing} checked={status} />
      <span>{title}</span>
    </label>
  );
};

export default About;
