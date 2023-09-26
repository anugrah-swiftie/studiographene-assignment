import React from "react";
import "./Logo.css";
import horizontalRule from "../assets/horizontal-rule.png";

const Logo = () => {
  return (
    <div>
      <div className="container-fluid parent-div-2">
        <div className="left-div me-auto">
          <a href="#">
            <h1>ShopKart</h1>
          </a>
        </div>
        <div className="right-div">
          <ul className="d-flex">
            <li>
              <a href="#">WISHLIST (0)</a>
            </li>
            <li className="bag">
              <a href="#">BAG (0)</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="horizontal-rule">
        <img src={horizontalRule} alt="horizontal-rule" />
      </div>
    </div>
  );
};

export default Logo;
