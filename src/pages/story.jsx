import React from "react";
import ReactTooltip from "react-tooltip";

import "./story.styles.scss";

// get fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Feedback from "../components/feedback/feedback";
import article from "../assets/images/article-preview.jpeg";

class Story extends React.Component {
  render() {
    return (
      <main className="page-container">
        <div className="page-content">
          <h1>
            Step by Step Guide to Create 3 Different Types of Loading Screens in
            React
          </h1>
          <div className="story-info">
            <div>
              <a href="/">March 10th 2021</a>
              <span>
                <FontAwesomeIcon icon={faStar} />
                323 reads
              </span>
              <button data-tip="For more stories keep reading Hackereve.com">
                <FontAwesomeIcon icon={faBookmark} />
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
        </div>
      </main>
    );
  }
}

export default Story;
