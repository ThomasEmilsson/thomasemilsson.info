import React, { useState, useRef, useEffect } from "react";
import HeaderLink from "./HeaderLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

const isBrowser = typeof window !== "undefined";

const Header = () => {
  const [selected, setSelected] = useState("home");
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState();

  useEffect(() => {
    if (isBrowser) setWidth(window.innerWidth);

    function updateWidth() {
      if (isBrowser) setWidth(window.innerWidth);
      if (width > 600) {
        setMenu(false);
      }
    }
    if (isBrowser) window.addEventListener("resize", updateWidth);
  });

  const updateSelected = (event) => {
    setSelected(`${event.target.text}`);
  };

  const handleToggle = () => {
    setMenu((prev) => !prev);
  };

  const goToItem = (event) => {
    setMenu(false);
  };

  return (
    <div className={`header`}>
      {width <= 600 ? (
        <FontAwesomeIcon
          onClick={handleToggle}
          className={`hamburger ${menu ? "hide-menu-button" : ""}`}
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
          {/* <HeaderLink
            name="about-me"
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
          /> */}
        </div>
      )}
      {menu ? (
        <div className="menu-container">
          <a href="#home" className="menu-item" onClick={goToItem}>
            home
          </a>
          <a href="#resume" className="menu-item" onClick={goToItem}>
            resume
          </a>
          {/* <a href="#about-me" className="menu-item" onClick={goToItem}>
            about me
          </a>
          <a href="#portfolio" className="menu-item" onClick={goToItem}>
            portfolio
          </a>
          <a href="#contact" className="menu-item" onClick={goToItem}>
            contact
          </a> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Header;
