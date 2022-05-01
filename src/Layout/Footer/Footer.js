import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./FooterStyle.css";
const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer_info">
        <span> About us </span>
        <span>prime factor decomposition </span>
      </div>
      <media>
        {" "}
        <span>prime factor decomposition</span>{" "}
        <div className="app__social">
          <div>
            <BsLinkedin />
          </div>
          <div>
            <FaFacebookF />
          </div>
        </div>
      </media>
    </footer>
  );
};

export default Footer;
