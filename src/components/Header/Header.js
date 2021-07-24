import React, { useState } from "react";
import HeaderLink from "./HeaderLink";

import "./Header.scss";

const Header = () => {
  const [selected, setSelected] = useState("about me");

  const updateSelected = (event) => {
    if (event.target.firstChild.data == "Thomas Emilsson") {
      setSelected("about me");
    } else {
      setSelected(`${event.target.text}`);
    }
  };

  return (
    <div className="header">
      <div className="div-title">
        <HeaderLink
          name="Thomas Emilsson"
          selected={selected}
          updateSelected={updateSelected}
        />
      </div>
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
