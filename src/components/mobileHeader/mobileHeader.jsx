import React from "react";

import "./mobileHeader.styles.scss";

// get fontawesome imports
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profile from "../../assets/images/profile.jpeg";

const MobileHeader = (props) => {
  return (
    <div className="mobile-header">
      <header className="header">
        <div>
          <img
            src={profile}
            alt="user profile preview"
            width="50px"
            height="50px"
          />
        </div>
        <div className="toggle-mobileheader">
          <button
            onClick={() => {
              props.setVisible(false);
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </header>
      <nav className="mobile-nav">
        <ul>
          <li>Read</li>
          <li>Top Stories</li>
          <li>Listen</li>
          <li>Write</li>
          <li>Learn</li>
          <li>Advertise</li>
          <li>About</li>
          <li>Tech Companies</li>
          <li>Careers</li>
          <li>slogging</li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
