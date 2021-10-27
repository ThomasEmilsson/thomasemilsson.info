import React from "react";
import "./Banner.scss";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaSoundcloud,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div id="home" className="banner-div">
      <h1 className="banner-title"> Welcome</h1>
      <div className="banner-description">
        <p>My name is Thomas Emilsson</p>
        <p>
          I am a Software Engineer, Web Developer, Musician, and an Avid Climber
        </p>
        <p className="banner-icons">
          <a href="www.google.com">
            <FaLinkedin />
          </a>
          <a href="www.google.com">
            <FaGithub />
          </a>
          <a href="www.google.com">
            <FaSoundcloud />
          </a>
          <a href="www.google.com">
            <FaInstagram />
          </a>
          <a href="www.google.com">
            <FaFacebookSquare />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
