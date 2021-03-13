import React, { useContext } from "react";

// import context and theme
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Colors";

import "./footerTwo.styles.scss";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterTwo = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <footer
      className="main-footer"
      style={{ backgroundColor: `${currentTheme.tabletColor}` }}
    >
      <div className="footer-links">
        <ul>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            <strong>Help</strong>
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            <strong>About</strong>
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            <strong>Start Writing</strong>
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            <strong>Sponsor:</strong>
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Brand-As-Author
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Sitewide Billboard
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Ad by tag
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Newsletter
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Noonies
          </li>
        </ul>
        <ul>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Contact Us
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Privacy
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Terms
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Cookies
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Stories published yesterday
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Leaderboard
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Contributor's club
          </li>
          <li
            className="highlights"
            style={{ color: `${currentTheme.textColor}` }}
          >
            Chrome Extension
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li>
            <FontAwesomeIcon icon={faPodcast} />
          </li>
          <li>
            <FontAwesomeIcon icon={faRss} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterTwo;
