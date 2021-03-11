import React, { useContext } from "react";

import "./profile.styles.scss";

import profile from "../../assets/images/profile.jpeg";

// import context
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Colors";

// import fontawesome icons
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div className="profile-column">
      <a href="/">
        <img
          src={profile}
          alt="user profile preview"
          width="50px"
          height="50px"
          loading="lazy"
          style={{ marginRight: "10px", border: "2px solid #eee" }}
        />
      </a>
      <div className="profile-info">
        <h3>
          <a href="/" style={{ color: `${currentTheme.textColor}` }}>
            @Codebucks
          </a>
          <small>CodeBucks</small>
        </h3>
        <p className="profile-description">
          Helping you to learn code! here you'll find tutorials around web
          development.Keep Coding...😜
        </p>
        <div className="profile-social">
          <a href="/">
            <FontAwesomeIcon icon={faTwitter} style={{ color: " #9656a1" }} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faGithub} style={{ color: " #9656a1" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
