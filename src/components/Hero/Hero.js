import React from "react";
import image from "../../images/image-hero.jpg";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaSoundcloud,
} from "react-icons/fa";

import "../Hero/Hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="image-container">
        <img className="hero-image" src={image} alt="image" />
      </div>
      <div className="hero-title-container">
        <div className="hero-name-container">
          <p className="full-name">Thomas Emilsson</p>
          <p className="role-name"> Software Engineer / Web Developer</p>
          {/* <p className="description"> In my spare time, you can find me climbing, making music, or working on side projects</p> */}
        </div>
      </div>
      <div className="hero-links-container">
        <div className="">
          <ul>
            <li>
              <b>Born:</b> April 29th, 1992
            </li>
            <li>
              <b>Phone:</b> +46 70 780 2460
            </li>
            <li>
              <b>Email:</b> thomasbp.emilsson@gmail.com
            </li>
            <li>
              <b>Address:</b> Sweden
            </li>
            <li className="links">
              <a href="https://www.linkedin.com/in/thomasemilsson/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ThomasEmilsson">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/bjornparedes/">
                <FaInstagram />
              </a>
              <a href="https://soundcloud.com/user-791546252">
                <FaSoundcloud />
              </a>
              <a href="https://www.facebook.com/profile.php?id=511624622">
                <FaFacebookSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
