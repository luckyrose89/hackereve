import React, { useContext } from "react";
import ReactTooltip from "react-tooltip";

import "./story.styles.scss";

// import context and theme
import ThemeContext from "../ThemeContext";
import AppTheme from "../Colors";

// get fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Feedback from "../components/feedback/feedback";
import article from "../assets/images/article-preview.jpeg";
import Profile from "../components/profile/profile";
import Article from "../components/article/article";

const Story = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <main
      className="page-container"
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <div className="page-content">
        <h1>
          Step by Step Guide to Create 3 Different Types of Loading Screens in
          React
        </h1>
        <div className="story-info">
          <div>
            <a href="/" style={{ color: `${currentTheme.textColor}` }}>
              March 10th 2021
            </a>
            <span style={{ backgroundColor: `${currentTheme.tabletColor}` }}>
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: `${currentTheme.textColor}` }}
              />
              323 reads
            </span>
            <button data-tip="For more stories keep reading Hackereve.com">
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: `${currentTheme.textColor}` }}
              />
            </button>
            <ReactTooltip
              className="tooltip"
              place="right"
              backgroundColor="#000"
            />
          </div>
          <Feedback />
        </div>
        <div className="image-container">
          <div className="full-width">
            <img src={article} alt="article feature" />
          </div>
        </div>
        <Profile />
        <Article />
      </div>
    </main>
  );
};

export default Story;
