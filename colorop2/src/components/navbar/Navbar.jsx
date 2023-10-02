import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";
// BEM -> BLOCK ELEMENT MODIFIER

const Menu = () => (
  <>
    <p>
      <a href="#home"> Home </a>
    </p>
    <p>
      <a href="#wgpt3"> Who are we? </a>
    </p>
    <p>
      <a href="#possibility"> ARC </a>
    </p>
    <p>
      <a href="#features"> Projects </a>
    </p>
    <p>
      <a href="#blog"> News and Updates </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" class="h-auto max-w-sm shadow-lg dark:shadow-black/30"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? 
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
         : 
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        }

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links"></div>
            <Menu />

            <div className="gpt3__navbar-menu-container-links-sign">
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
