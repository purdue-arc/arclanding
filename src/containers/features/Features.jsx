import React from "react";
import "./features.css";
import {Feature} from "../../components";
const featuresData = [
  {
    title: "Drone Delivery",
    text:  <a>Our project focuses on developing an autonomous drone capable of delivering packages, revolutionizing last-mile delivery
       applications. This drone will have an optimized flight control system to efficiently navigate urban environments, avoid all 
       potential obstacles (like buildings and trees), and plan long-term routes. We are also creating a mobile app that enables users
        to easily interact with the drone and experience the convenience of drone delivery firsthand.</a>
  },
  {
    title: "Wizard Chess",
    text: <a>We're creating a large-scale, autonomous chess game inspired by the enchanting Wizard's Chess from Harry Potter. The 
      pieces will consist of individual robots, controlled using Raspberry Pi Picos and wifi chips, that all connect to a central 
      computer that controls all the pieces movements. On the software side, our goal is to bring chess to life by combining voice
       recognition, path planning, computer vision, and swarm control to develop a unique, interactive player experience.</a>
},
{
    title: "Dog Copter",
    text: <a>We're building a groundbreaking fusion of a drone and a robotic dog, featuring autonomous navigation and camera/lidar vision.
      Inspired by innovations in robotic dogs (Boston Dynamics' Spot), flying cars, and drones, our goal is to create a versatile robot
      capable of seamless transitions, effortlessly traversing rocky land and taking flight in the air, primarily for exploration purposes.
      Join us as we push the boundaries of robotics to create the marvel that is DogCopter.</a>
},
{
    title: "Piano Hand",
    text: <a>Inspired by groundbreaking biomechanical robots like Boston Dynamics' Atlas, our project aims to build a fully autonomous,
       human-like hand capable of playing the piano, achieving the dexterity and complexity of the human hand's 27 degrees of freedom. 
       We are exploring the exciting realm of machine learning and optical image recognition to develop a model that can read sheet music,
        delving in to different algorithms to make hand motion along the piano as real as possible, and controlling and running all this 
        with controllers channeled by PCBs.</a>
},
{
    title: "Rocket League",
    text: <a>We are building an autonomous system of small-scale vehicles to play exhilarating, high-speed soccer matches. Inspired by the 
      popular video game Rocket League, our goal is to create a dynamic and interactive demo, pitting human-controlled cars against autonomous 
      ones. As we progress, we envision launching a multi-university competition, inviting teams to showcase their own intelligent strategies 
      in a thrilling autonomous soccer tournament. Be a part of this cutting-edge initiative and help shape the future of autonomous sports!</a>
}

];
const Features = () => {
  return (
    <div>
        <div className="gpt3__features-heading">
            <h1 className="gradient__text">
                The future with Autonomous Robotics is now. Let's make it happen together. Learn more about our projects here!
            </h1>

        </div>
    <div className="gpt3__features section__padding" id="features">

      <div className="gpt3__features-container">
      {featuresData.map((item, index) =>(
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    </div>
    </div>
        </div>
  );
};

export default Features;
