import React from "react";
import truckIcon from "../assets/truck-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import linkedIcon from "../assets/linkedin-icon.png";
import xIcon from "../assets/x-icon.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container-fluid parent-div-1">
        <div className="left-child-div me-auto">
          <ul className="p-0">
            <li>
              <img src={truckIcon} alt="truck-icon" />
            </li>
            <li className="free-delivery">
              <a href="#">Free Delivery</a>
            </li>
            <div className="vl"></div>
            <li className="return-policy">
              <a href="#">Return Policy</a>
            </li>
          </ul>
        </div>
        <div className="right-child-div">
          <ul>
            <li className="login">
              <a href="#">Login</a>
            </li>
            <li className="follow-us">
              <a href="#">Follow US</a>
            </li>
            <li className="facebook-icon">
              <a href="#">
                <img src={facebookIcon} />
              </a>
            </li>
            <li className="linkedin-icon">
              <a href="#">
                <img src={linkedIcon} />
              </a>
            </li>
            <li className="x-icon">
              <a href="#">
                <img src={xIcon} />
              </a>
            </li>
            <li className="instagram-icon">
              <a href="#">
                <img src={instagramIcon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
