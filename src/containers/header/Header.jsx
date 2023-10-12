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
            Mission: We are building autonomous systems that advance the field of robotics. Our projects cover a wide range of disciplines and tackle problems at the forefront of research.
          </p>
          <p>
            Links below:
          </p>

          <div className="gpt3__header-content__input">
            <a href="https://discord.gg/feyyGCA6QU" target="_blank" rel="noopener noreferrer">
              <button type="button">
                <img src={discord} alt="Discord" />
              </button>
            </a>


            <a href="https://github.com/purdue-arc" target="_blank" rel="noopener noreferrer">
              <button type="button">
                <img src={github} alt="Github" />
              </button>
            </a>

            <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">
              <button type="button">
                <img src={notion} alt="Notion" />
              </button>
            </a>

          </div>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
  );
};
export default Header;
