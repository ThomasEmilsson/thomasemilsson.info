import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div>
      <ReadOnlyCheckBox title="test" status={false} indent={1} />
      <ReadOnlyCheckBox title="test" status={true} indent={2} />
      <ReadOnlyCheckBox title="test" status={false} indent={3} />
    </div>
  );
};

const ReadOnlyCheckBox = ({ title, status, indent }) => {
  const doNothing = (event) => {
    event.target.checked = !event.target.checked;
  };

  return (
    <div className={`indent-${indent}`}>
      <label>
        <input
          type="checkbox"
          // className={`indent-${indent}`}
          onChange={doNothing}
          checked={status}
        />
        <span>{title}</span>
      </label>
    </div>
  );
};

export default About;
