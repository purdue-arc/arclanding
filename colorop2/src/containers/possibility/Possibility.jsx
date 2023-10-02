import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
          Your potential is beyond your imagination
        </h1>
        <p>
        The Autonomous Robotics Club (ARC) of Purdue was created to grow the skills and abilities of its members through design projects centered around advanced autonomous robotics systems. 
        It provides hands-on, real world experience to interdisciplinary teams using industry standard tools and practices. 
        ARC allows open exploration of challenging problems within the field of autonomous robotics systems and gives students of any background a platform to collaborate with an active community of shared knowledge.
        </p>
      </div>
    </div>
  );
};

export default Possibility;
