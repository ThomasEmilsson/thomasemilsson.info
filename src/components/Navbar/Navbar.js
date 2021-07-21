import React, { useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [selected, setSelected] = useState("about");

  const updateSelected = (event) => {
    setSelected(`${event.target.text}`);
  };

  return (
    <div className="navbar">
      <a
        className={`link ${selected === "about" ? "selected" : ""}`}
        onClick={updateSelected}
        to="about"
      >
        about
      </a>
      <a
        className={`link ${selected === "work" ? "selected" : ""}`}
        onClick={updateSelected}
        to="work"
      >
        work
      </a>
      <a
        className={`link ${selected === "contact" ? "selected" : ""}`}
        onClick={updateSelected}
        to="work"
      >
        contact
      </a>
    </div>
  );
};

export default Navbar;
