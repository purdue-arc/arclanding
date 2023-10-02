import React from "react";
import "./features.css";
import {Feature} from "../../components/";
const featuresData = [
  {
    title: "Drone Delivery",
    text:
      "Sample Text 1 Sample text 1 Sample text 1 Sample text 1",
  },
  {
    title: "Wizard Chess",
    text:
      "Sample Text2 Sample text 2 Sample text 2 Sample text 2",
  },
  {
    title: "Dog Copter",
    text:
      "Sample Text3 Sample text 3 Sample text 3 Sample text 3",
  },
  {
    title: "Piano Hand",
    text:
      "Sample Text 4 Sample text 4 Sample text 4 Sample text 4",
  },

  
];
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future with Autonomous Robotics is now. Let's make it happen together.
        </h1>
        <p>Learn More About Our Projects:</p>
      </div>
      <div className="gpt3__features-container">
      {featuresData.map((item, index) =>(
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    </div>
  );
};

export default Features;
