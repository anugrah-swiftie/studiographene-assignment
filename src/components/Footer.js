import React, { useState } from "react";
import validator from "validator";
import "./Footer.css";
import footerBackgroundImage from "../assets/footer-background-img.png";

const Footer = () => {
  const [userErr, setUserErr] = useState(false);
  const [emailError, setEmailError] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
  };

  const inputNameHandler = (e) => {
    const nameLength = e.target.value.length;
    if (nameLength < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  };

  const inputMessageHandler = (e) => {
    const messageLength = e.target.value.length;
    if (messageLength < 25) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  };

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <div>
      <div
        className="footer"
        style={{ backgroundImage: `url(${footerBackgroundImage})` }}
      >
        <div className="newsletter">
          <a href="#">Newsletter</a>
          <p>Get news about articles and updates in your inbox.</p>
        </div>
        <div>
          <form onSubmit={loginHandler}>
            <input
              type="text"
              placeholder="NAME"
              name="fullname"
              onChange={inputNameHandler}
            />
            {userErr ? (
              <span style={{ color: "white" }}>Not Valid Name</span>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="EMAIL"
              name="email-id"
              className="email"
              onChange={validateEmail}
            />
            <span
              style={{
                color: "white",
              }}
            >
              {emailError}
            </span>
            <input
              type="text"
              placeholder="MESSAGE"
              name="message"
              className="message"
              onChange={inputMessageHandler}
            />
            {userErr ? (
              <span style={{ color: "white" }}>
                Please atleast enter a 25 character long message
              </span>
            ) : (
              ""
            )}
            <div className="send-button">
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
        <div className="contact-us">
          <h1>
            GET
            <br />
            IN TOUCH
          </h1>
        </div>
      </div>
      <div className="copyright-section">
        <p>Copyright 2022 All Right Reserved By SG</p>
      </div>
    </div>
  );
};

export default Footer;
