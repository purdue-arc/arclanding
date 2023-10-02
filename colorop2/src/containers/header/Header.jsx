import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import robotArm from "../../assets/robotArm.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          The Autonomous Robotics Club of Purdue University
        </h1>
        <p>
          We are building autonomous systems that advance the field of robotics.
          Our projects cover a wide range of disciplines and tackle problems at the forefront of research.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Email Address" />
          <button type="button"> Sign Up</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />

          <p>31415926535 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      
        <div className="gpt3__header-image">
          <img src={robotArm} alt="RobotArm" />
        </div>
    </div>
  );
};

export default Header;
