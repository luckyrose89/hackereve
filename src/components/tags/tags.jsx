import React, { useContext } from "react";

// import context and theme
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Colors";

import "./tags.styles.scss";

const Tags = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <section className="tags-section">
      <h3>Tags</h3>
      <div className="tags">
        <a href="/" style={{ color: `${currentTheme.textColor}` }}>
          #react
        </a>
        <a href="/" style={{ color: `${currentTheme.textColor}` }}>
          #reactjs
        </a>
        <a href="/" style={{ color: `${currentTheme.textColor}` }}>
          #javascript
        </a>
        <a href="/" style={{ color: `${currentTheme.textColor}` }}>
          #web-development
        </a>
        <a href="/" style={{ color: `${currentTheme.textColor}` }}>
          #website-development
        </a>
        <a href="/" style={{ color: `${currentTheme.textColor}` }}>
          #loading-screen
        </a>
        <a href="/" style={{ color: `${currentTheme.textColor}` }}>
          #reactjs-loading
        </a>
        <a href="/" style={{ color: `${currentTheme.textColor}` }}>
          #webdev
        </a>
        <a href="/" style={{ color: `${currentTheme.textColor}` }}>
          #web-monetization
        </a>
      </div>
    </section>
  );
};

export default Tags;
