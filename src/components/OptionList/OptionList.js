import React, { useState } from "react";
import "./OptionList.scss";
import OptionListItem from "./OptionListItem";
import OptionDetail from "./OptionDetail";
import CVObject from "../../CV.json";

const OptionList = () => {
  const [selected, setSelected] = useState("Experience");

  const updateSelected = (event) => {
    setSelected(`${event.target.textContent}`);
  };

  let content = "";

  if (selected == "Experience") {
    content = CVObject.Experience;
  } else if (selected == "Education") {
    content = CVObject.Education;
  } else if (selected == "Skillset") {
    content = CVObject.Skills;
  } else {
    content = CVObject.Project;
  }

  return (
    <div id="resume" className="option-list-div">
      <div className="option-list">
        <OptionListItem
          type="Experience"
          selected={selected}
          updateSelected={updateSelected}
        />
        <OptionListItem
          type="Education"
          selected={selected}
          updateSelected={updateSelected}
        />
        <OptionListItem
          type="Skillset"
          selected={selected}
          updateSelected={updateSelected}
        />
        <OptionListItem
          type="Project"
          selected={selected}
          updateSelected={updateSelected}
        />
      </div>
      <OptionDetail type={selected} content={content} />
    </div>
  );
};

export default OptionList;
