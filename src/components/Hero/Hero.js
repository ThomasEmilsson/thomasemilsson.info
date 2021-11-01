import React from "react";
import image from "../../images/image-hero.jpg";

import "../Hero/Hero.scss";

const Hero = () => {
  return (
    <div class="hero-container">
      <div className="image-container">
        <img className="hero-image" src={image} alt="image" />
      </div>
      <div className="hero-title-container">
        <div className="hero-name-container">
          <p>Thomas Emilsson</p>
        </div>
        <div className="hero-description-container">This is my name</div>
      </div>
      <div className="hero-links-container">
        <div className="">
          <p>Test</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
