import React from "react";
import "./features.css";
import {Feature} from "../../components";
const featuresData = [
  {
    title: "Drone Delivery",
    text:  <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">Sample Link 1</a>
  },
  {
    title: "Wizard Chess",
    text: <a href="https://example.com/link2" target="_blank" rel="noopener noreferrer">Sample Link 2</a>
},
{
    title: "Dog Copter",
    text: <a href="https://example.com/link3" target="_blank" rel="noopener noreferrer">Sample Link 3</a>
},
{
    title: "Piano Hand",
    text: <a href="https://example.com/link4" target="_blank" rel="noopener noreferrer">Sample Link 4</a>
}
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
