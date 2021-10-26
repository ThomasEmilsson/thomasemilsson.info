import React from "react";

import "./HeaderLink.scss";

const HeaderLink = ({ name, selected, updateSelected }) => {
  if (name === "Thomas Emilsson") {
    return (
      <a href={`#`} onClick={updateSelected}>
        <h2 className={`header-inline ${selected === name ? "selected" : ""}`}>
          Thomas Emilsson
        </h2>
        <p className="header-dot header-inline">.</p>
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
