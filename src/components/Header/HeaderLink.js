import React from "react";

import "./HeaderLink.scss";

const HeaderLink = ({ name, selected, updateSelected }) => {
  if (name === "Thomas Emilsson") {
    return (
      <a href={`#`} onClick={updateSelected}>
        <h2 className={`title inline ${selected === name ? "selected" : ""}`}>
          Thomas Emilsson
        </h2>
        <p className="dot inline">.</p>
        {/* <p className="role inline"> Software Engineer</p> */}
      </a>
    );
  } else
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
