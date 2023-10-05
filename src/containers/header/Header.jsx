import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import discord from "../../assets/discord.png"
import github from "../../assets/github.png"
import notion from "../../assets/notion.png"
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Welcome to Purdue ARC
        </h1>
        <p>
          Mission:
        </p>

        <div className="gpt3__header-content__input">
          <button type="button"> Discord
            <img src = {discord}/>
          </button>

          <button type="button"> Github
            <img src = {github}/>
          </button>

          <button type="button"> Notion
            <img src = {notion}/>
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
