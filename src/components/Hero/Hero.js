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
          <p className="full-name">Thomas Emilsson</p>
          <p className="role-name"> Software Engineer / Web Developer</p>
          <p className="description">
            Thomas is a focused and driven software engineer, skilled in
            programming, project management and integration development. His
            international experiences enable him to use his skills and knowledge
            with an innovative mindset. Whether as part of a team or
            independently, he shows determination, adaptability and enthusiasm
            when approaching a challenge.
          </p>
        </div>
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
