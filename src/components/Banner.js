import React from "react";
import bannerImage from "../assets/banner.png";
import redirectIcon from "../assets/redirect-icon.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="container-fluid banner-container p-0">
        <img src={bannerImage} alt="home-page-banner" />
      </div>
      <div className="first-heading">
        <h1>Fresh</h1>
      </div>
      <div className="second-heading">
        <h1>2022</h1>
      </div>
      <div className="third-heading">
        <h1>Look</h1>
      </div>
      <a href="#" className="see-more-link">
        See more <img src={redirectIcon} />
      </a>
    </div>
  );
};

export default Banner;
