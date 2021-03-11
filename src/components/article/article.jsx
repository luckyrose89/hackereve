import React, { useContext } from "react";

import "./article.styles.scss";

// import context and theme
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Colors";

const Article = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div className="article-content">
      <p>Hey People,</p>
      <p>
        I was finding a good way to make Loading screen/animation for my small
        React application, and I found 3 different ways to make good loading
        screens,
      </p>
      <p>
        Type-1 : Using{" "}
        <a
          href="/"
          style={{ color: `${currentTheme.textColor}` }}
          className="highlight-links"
        >
          react-loading
        </a>{" "}
        library.
      </p>
      <p>
        Type-2 : Using{" "}
        <a
          href="/"
          style={{ color: `${currentTheme.textColor}` }}
          className="highlight-links"
        >
          react-lottie
        </a>{" "}
        library.
      </p>
      <p>
        Type-3 : Using simple <strong>CSS</strong>
      </p>
      <p>
        If you prefer to watch video tutorial then you can watch it here else
        just watch first 2 minutes to get an idea of what we're going to build
        here..and keep reading!😄
      </p>
      <div className="youtube-video">
        <iframe
          width="727"
          height="409"
          src="https://www.youtube.com/embed/Y7pL5wG5QOg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Article;
