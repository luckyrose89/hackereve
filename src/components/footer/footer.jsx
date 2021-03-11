import React from "react";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.styles.scss";

import profile from "../../assets/images/profile.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <div>Share this story</div>
        <div className="social-links">
          <button>
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button>
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button>
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </div>
      <div className="author-bio">
        <div className="author-profile">
          <div>
            <img
              src={profile}
              alt="writer profile preview"
              width="50px"
              height="50px"
            />
          </div>
          <div className="author-links">
            <a href="/">@CodeBucks</a>
            <p>codebucks</p>
          </div>
        </div>
        <div>Subscribe to Learn ReactJS by building!</div>
      </div>
    </footer>
  );
};

export default Footer;
