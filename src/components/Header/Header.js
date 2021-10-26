import React, { useState, useRef, useEffect } from "react";
import HeaderLink from "./HeaderLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

const Header = () => {
  const [selected, setSelected] = useState("home");
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
  });

  const updateSelected = (event) => {
    if (event.target.firstChild.data == "Thomas Emilsson") {
      setSelected("about me");
    } else {
      setSelected(`${event.target.text}`);
    }
  };

  const handleToggle = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="header">
      {width <= 600 ? (
        <FontAwesomeIcon
          onClick={handleToggle}
          className="hamburger"
          icon={faBars}
        />
      ) : (
        <div className="header-div-link">
          <HeaderLink
            name="home"
            selected={selected}
            updateSelected={updateSelected}
          />
          <HeaderLink
            name="resume"
            selected={selected}
            updateSelected={updateSelected}
          />
          <HeaderLink
            name="portfolio"
            selected={selected}
            updateSelected={updateSelected}
          />
          <HeaderLink
            name="contact"
            selected={selected}
            updateSelected={updateSelected}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
