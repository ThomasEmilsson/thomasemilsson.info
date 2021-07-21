import React, { useState } from "react";
import NavLink from "./NavLink";

import "./Nav.scss";

const Navbar = () => {
  const [selected, setSelected] = useState("about");

  const updateSelected = (event) => {
    setSelected(`${event.target.text}`);
  };

  return (
    <div className="navbar">
      <NavLink
        name="about"
        selected={selected}
        updateSelected={updateSelected}
      />
      <NavLink
        name="work"
        selected={selected}
        updateSelected={updateSelected}
      />
      <NavLink
        name="contact"
        selected={selected}
        updateSelected={updateSelected}
      />
    </div>
  );
};

export default Navbar;
