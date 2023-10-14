import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";
import boilerlink from "../../assets/boilerlink.png"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Join ARC below!
        </h1>
      </div>

      <div className="gpt3__footer-btn">

        <a href = "https://boilerlink.purdue.edu/organization/purduearc" target={"_blank"} rel={"noopener noreferrer"}>
            <img src={boilerlink} alt="boilerlink"/>
        </a>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p>Purdue ARC, All Rights Reserved</p>
        </div>
          {/*<div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p> Overons</p>
          <p> Social Media</p>
          <p> Counters</p>
          <p> Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p> Terms & Conditions</p>
          <p> Privacy Policy</p>
          <p> Contact</p>
        </div>

      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved. </p> */}
      </div>
    </div>
  );
};

export default Footer;
