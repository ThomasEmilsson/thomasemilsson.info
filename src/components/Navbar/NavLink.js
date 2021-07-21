import React, { useState } from "react";
import "./Nav.scss";

const NavLink = ({ name, selected, updateSelected }) => {
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

export default NavLink;
