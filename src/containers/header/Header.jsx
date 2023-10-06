import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import discord from "../../assets/discord.svg"
import github from "../../assets/github.svg"
import notion from "../../assets/notion.svg"
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Welcome to Purdue ARC
        </h1>
        <p>
          Mission: (previous text) We are building autonomous systems
          that advance the field of robotics. Our projects cover a wide
          range of disciplines and tackle problems at the
          forefront of research.
        </p>

        <div className="gpt3__header-content__input">
          <button type="button">
            <img src = {discord} style = {{width:100,height:100,marginBottom:-10}} alt={"Discord"}/>
            <p>Discord</p>
          </button>

          <button type="button">
            <img src = {github} style = {{width:100,height:100,marginBottom:-10}} alt={"GitHub"}/>
            <p>Github</p>
          </button>

          <button type="button">
            <img src = {notion} style = {{width:100,height:100,marginBottom:-10}} alt={"Notion"}/>
            <p>Notion</p>
          </button>
        </div>
      </div>
      
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
