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
          <li className="highlight-links">
            <strong>Help</strong>
          </li>
          <li className="highlight-links">
            <strong>About</strong>
          </li>
          <li className="highlight-links">
            <strong>Start Writing</strong>
          </li>
          <li className="highlight-links">
            <strong>Sponsor:</strong>
          </li>
          <li className="highlight-links">Brand-As-Author</li>
          <li className="highlight-links">Sitewide Billboard</li>
          <li className="highlight-links">Ad by tag</li>
          <li className="highlight-links">Newsletter</li>
          <li className="highlight-links">Noonies</li>
        </ul>
        <ul>
          <li className="highlight-links">Contact Us</li>
          <li className="highlight-links">Privacy</li>
          <li className="highlight-links">Terms</li>
          <li className="highlight-links">Cookies</li>
          <li className="highlight-links">Stories published yesterday</li>
          <li className="highlight-links">Leaderboard</li>
          <li className="highlight-links">Contributor's club</li>
          <li className="highlight-links">Chrome Extension</li>
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
