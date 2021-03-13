import React from "react";

import "./mobileHeader.styles.scss";

// get fontawesome imports
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
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
          <li>
            <a href="/">Read</a>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <a href="/">Top Stories</a>
          </li>
          <li>
            <a href="/">Listen</a>
          </li>
          <li>
            <a href="/">Write</a>
          </li>
          <li>
            <a href="/">Learn</a>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <a href="/">Advertise</a>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <a href="/">About</a>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <a href="/">Tech Companies</a>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">slogging</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
