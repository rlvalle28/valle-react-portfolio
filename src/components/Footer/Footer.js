import React from "react";
import logo_img from "../../images/logo_remove_bg.png";
import "./Footer.css";
import "./Footer_responsive.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="main-container" id="footer">
      <div className="container-row">
        <div className="footer">
          <img
            src={logo_img}
            alt="Ralph Valle logo"
          />

          <h6>© {currentYear} All rights reserved.</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;