import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Who Are We?"
          text="We are the Autonomous Robotics Club of Purdue (ARC)"
        />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Turn your imagination into reality
        </h1>
        <p> Explore Our Work</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Autonomous Robots"
          text="Sample text 1 Sample text 1 Sample text 1 Sample text 1"
        />
        <Feature
          title="AI Algorithms"
          text="Sample text 2 Sample text 2 Sample text 2 Sample text 2"
        />
        <Feature
          title="Out Impact"
          text="Sample text 3 Sample text 3 Sample text 3 Sample text 3"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
