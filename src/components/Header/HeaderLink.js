import React from "react";
import "./Header.scss";

const HeaderLink = ({ name, selected, updateSelected }) => {
  return (
    <a
      className={`link ${selected === name ? "selected" : ""}`}
      onClick={updateSelected}
      href={`#${name}`}
    >
      {name}
    </a>
  );
};

export default HeaderLink;
