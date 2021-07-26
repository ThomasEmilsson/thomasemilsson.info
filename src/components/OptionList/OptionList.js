import React, { useState } from "react";
// import Card from "../Card/Card";
import "./OptionList.scss";

const OptionList = () => {
  return (
    <div className="option-list-div">
      <div className="option-list">
        <ul>
          <li className="option-list-item option-list-item-selected">
            Experience
          </li>
          <li className="option-list-item">Education</li>
          <li className="option-list-item">Skillset</li>
        </ul>
      </div>
      <div className="option-detail"></div>
    </div>
  );
};

export default OptionList;
