import React from "react";

import "./OptionListItem.scss";

const OptionListItem = ({ type, selected, updateSelected }) => {
  return (
    <li
      className={`${
        selected === type ? "option-list-item-selected" : "option-list-item"
      }`}
      onClick={updateSelected}
    >
      {type}
    </li>
  );
};

export default OptionListItem;
