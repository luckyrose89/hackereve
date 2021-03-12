import React, { useContext } from "react";

import ThemeContext from "../../ThemeContext";

import pumpkin from "../../assets/images/pumpkin.png";
import search from "../../assets/images/search.png";

// import fontawesome icons
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.styles.scss";

const Header = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <header>
      <div className="nav-top">
        <div className="nav-top-brand">
          <a href="/" className="mobile">
            <img src={pumpkin} alt="site logo" />
          </a>
          <a href="/" className="desktop">
            <img src={pumpkin} alt="site logo" />
            <span className="logo">HACKEREVE</span>
          </a>
        </div>

        <form className="search-bar">
          <input type="text" placeholder="Search..." />
          <img className="search-icon" src={search} alt="search icon" />
        </form>

        <div className="auth-options">
          <a href="/" className="auth-option-start">
            Start Writing
          </a>
          <a href="/">Log In</a>
        </div>

        <button
          className="theme-toggle"
          onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light");
          }}
        >
          {themeMode === "light" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
        <button className="mobile-menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className="nav-bottom">
        <ul>
          <li>Read</li>
          <li>Top Stories</li>
          <li>Write</li>
          <li>Listen</li>
          <li>Advertise</li>
          <li>About</li>
          <li>Tech Companies</li>
          <li>Careers</li>
          <li>Slogging</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
