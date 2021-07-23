import React, { useState } from "react";
import HeaderLink from "./HeaderLink";

import "./Header.scss";

const Header = () => {
  const [selected, setSelected] = useState("about");

  const updateSelected = (event) => {
    setSelected(`${event.target.text}`);
  };

  return (
    <div className="header">
      <div className="shape-left"></div>
      <div className="div-title">
        <h2 className="title">Thomas Emilsson</h2>
      </div>
      <div className="shape-right"></div>

      <div className="div-link">
        <HeaderLink
          name="about me"
          selected={selected}
          updateSelected={updateSelected}
        />
        <HeaderLink
          name="resume"
          selected={selected}
          updateSelected={updateSelected}
        />
        <HeaderLink
          name="projects"
          selected={selected}
          updateSelected={updateSelected}
        />
        <HeaderLink
          name="contact"
          selected={selected}
          updateSelected={updateSelected}
        />
      </div>
    </div>
  );
};

export default Header;
