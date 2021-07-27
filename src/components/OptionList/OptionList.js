import React, { useState } from "react";
// import Card from "../Card/Card";
import "./OptionList.scss";
import OptionListItem from "./OptionListItem";
import OptionDetail from "./OptionDetail";

const OptionList = () => {
  const [selected, setSelected] = useState("Experience");

  const updateSelected = (event) => {
    setSelected(`${event.target.textContent}`);
  };

  return (
    <div className="option-list-div">
      <div className="option-list">
        <ul>
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
        </ul>
      </div>
      <OptionDetail type={selected} content={selected} />
    </div>
  );
};

export default OptionList;
