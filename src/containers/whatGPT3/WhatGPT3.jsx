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
          text="Description "
        />
        <Feature
          title="RISE"
          text="Description"
        />
        <Feature
          title="Our Impact"
          text="Description"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
