import React, { useState } from "react";

import ThemeContext from "./ThemeContext";
import Header from "./components/header/header";
import "./App.scss";
import Story from "./pages/story";
import FooterTwo from "./components/footerTwo/footerTwo";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="page-layout">
        <Header></Header>
        <Story />
        <FooterTwo />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
