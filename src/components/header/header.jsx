import React, { useContext, useState, useEffect } from "react";

import ThemeContext from "../../ThemeContext";

import pumpkin from "../../assets/images/pumpkin.png";
import search from "../../assets/images/search.png";

// import fontawesome icons
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.styles.scss";

const Header = (props) => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 200) {
      return setShow(false);
    } else if (window.scrollY < 700) {
      return setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  });

  return (
    <header>
      {!show && (
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
          <button
            className="mobile-menu"
            onClick={() => {
              props.setVisible(true);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      )}

      {!show && (
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
      )}
      {show && (
        <div className="articleTitle-nav">
          <div className="brand-headline">
            <img
              src={pumpkin}
              alt="hackereve brand"
              width="30px"
              height="30px"
            />
            <h4>
              Step by Step Guide to Create 3 Different Types of Loading Screens
              in React
            </h4>
          </div>
          <div className="author-value">
            Author:{" "}
            <a href="/" className="highlight-link">
              @codebucks
            </a>
          </div>
          <div className="follow-links">
            <a href="/">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
