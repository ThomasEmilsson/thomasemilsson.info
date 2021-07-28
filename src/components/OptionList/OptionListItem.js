import React from "react";

import "./OptionListItem.scss";

const OptionListItem = ({ type, selected, updateSelected }) => {
  return (
    <p
      className={`${
        selected === type ? "option-list-item-selected" : "option-list-item"
      }`}
      onClick={updateSelected}
    >
      {type}
    </p>
  );
};

export default OptionListItem;
