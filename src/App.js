import React, { useState } from "react";

import ThemeContext from "./ThemeContext";
import Header from "./components/header/header";
import "./App.scss";
import Story from "./pages/story";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="page-layout">
        <Header></Header>
        <Story />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
