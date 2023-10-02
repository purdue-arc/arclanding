import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Get Involved With ARC Today
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Sign up for the Mailing List</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p>610 Purdue Mall, West Lafayette, IN 47907, United States</p>
        </div>
        <div className="gpt3__footer-links_div">
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

        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p> City, Country</p>
          <p> 0823-88-444497</p>
          <p> user@domain.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2023 Purdue ARC. All rights reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
