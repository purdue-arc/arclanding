import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";
import boilerlink from "../../assets/boilerlink.png"

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
      </div>

      <div className="footer-btn">
      </div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p>Purdue ARC, All Rights Reserved</p>
        </div>
          {/*<div className="footer-links_div">
          <h4>Links</h4>
          <p> Overons</p>
          <p> Social Media</p>
          <p> Counters</p>
          <p> Contact</p>
        </div>

        <div className="footer-links_div">
          <h4>Company</h4>
          <p> Terms & Conditions</p>
          <p> Privacy Policy</p>
          <p> Contact</p>
        </div>

      </div>

      <div className="footer-copyright">
        <p>© 2021 GPT-3. All rights reserved. </p> */}
      </div>
    </div>
  );
};

export default Footer;
