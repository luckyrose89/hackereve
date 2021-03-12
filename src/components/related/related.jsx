import React from "react";

import "./related.styles.scss";

import relatedImgOne from "../../assets/images/relatedImgOne.jpeg";
import relatedImgTwo from "../../assets/images/relatedImgTwo.jpeg";
import relatedImgThree from "../../assets/images/relatedImgThree.jpeg";
import profile from "../../assets/images/profile.jpeg";

const Related = () => {
  return (
    <section className="related-section">
      <h3>Related</h3>
      <div className="related-gallery">
        <div className="card">
          <div className="title">
            <h4>ReactJS Pagination Tutorial: Building from Scratch</h4>
          </div>
          <div className="image-wrapper">
            <img src={relatedImgOne} alt="article preview" loading="lazy" />
            <div className="tag">
              <a href="/">React.js</a>
            </div>
          </div>
          <div className="author-details">
            <div className="profile">
              <a href="/">
                <img src={profile} alt="author" width="50px" height="50px" />
              </a>
              <div className="profile-name">
                <h4 className="highlight-links">@CodeBucks</h4>
                <small>codebucks</small>
              </div>
            </div>
            <div className="time-details">
              <div>8 min</div>
              <div>01/14/21</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="title">
            <h4>ReactJS Pagination Tutorial: Building from Scratch</h4>
          </div>
          <div className="image-wrapper">
            <img src={relatedImgTwo} alt="article preview" loading="lazy" />
            <div className="tag">
              <a href="/">React.js</a>
            </div>
          </div>
          <div className="author-details">
            <div className="profile">
              <a href="/">
                <img src={profile} alt="author" width="50px" height="50px" />
              </a>
              <div className="profile-name">
                <h4 className="highlight-links">@CodeBucks</h4>
                <small>codebucks</small>
              </div>
            </div>
            <div className="time-details">
              <div>8 min</div>
              <div>01/14/21</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="title">
            <h4>No Password is Better than A Strong Password</h4>
          </div>
          <div className="image-wrapper">
            <img src={relatedImgThree} alt="article preview" loading="lazy" />
            <div className="tag">
              <a href="/">Password Security</a>
            </div>
          </div>
          <div className="author-details">
            <div className="profile">
              <a href="/">
                <img src={profile} alt="author" width="50px" height="50px" />
              </a>
              <div className="profile-name">
                <h4 className="highlight-links">@CodeBucks</h4>
                <small>codebucks</small>
              </div>
            </div>
            <div className="time-details">
              <div>8 min</div>
              <div>01/14/21</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Related;
