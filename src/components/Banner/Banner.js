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
    <div className="banner-div">
      <h1 className="banner-title"> Welcome</h1>
      <p className="banner-description">
        I am a Software Engineer, Web Developer, Musician, and an Avid Climber
        <p className="banner-icons">
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaSoundcloud />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaFacebookSquare />
          </a>
        </p>
      </p>
    </div>
  );
};

export default Banner;
