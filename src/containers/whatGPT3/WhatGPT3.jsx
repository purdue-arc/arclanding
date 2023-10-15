import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Who are we?"
          text="We are the Autonomous Robotics Club of Purdue (ARC)."
        />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
        Turn your imagination into reality
        </h1>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Autonomous Robots"
          text="At ARC, we pioneer the development of cutting-edge autonomous robots, merging innovation and technology to create intelligent machines capable of operating independently in dynamic environments. "
        />
        <Feature
          title="RISE"
          text="RISE is our premier event at ARC, where we showcase the latest innovations and breakthroughs in robotics and intelligent systems. It serves as a platform for students to gain valuable insights and engage with cutting-edge technologies in the field."
        />
        <Feature
          title="Our Impact"
          text="ARC is proud to have a profound impact on hundreds of students, equipping them with the skills and knowledge to shape the future of robotics and automation, contributing to the advancement of technology and society."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
