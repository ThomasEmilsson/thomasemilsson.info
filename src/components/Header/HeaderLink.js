import React from "react";

import "./HeaderLink.scss";

const HeaderLink = ({ name, selected, updateSelected, type }) => {
  if (type === "menu") {
    return (
      <a
        className={`menu-item ${selected === name ? "selected" : ""}`}
        onClick={updateSelected}
        href={`#${name}`}
      >
        {name}
      </a>
    );
  } else
    return (
      <a
        className={`header-link ${selected === name ? "selected" : ""}`}
        onClick={updateSelected}
        href={`#${name}`}
      >
        {name}
      </a>
    );
};
export default HeaderLink;
