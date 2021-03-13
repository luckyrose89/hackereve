import React, { useState, useEffect } from "react";

import ThemeContext from "./ThemeContext";
import Header from "./components/header/header";
import "./App.scss";
import Story from "./pages/story";
import FooterTwo from "./components/footerTwo/footerTwo";
import MobileHeader from "./components/mobileHeader/mobileHeader";

function App() {
  const themeHook = useState("light");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [visible]);

  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="page-layout">
        <Header setVisible={setVisible} />
        {visible && <MobileHeader setVisible={setVisible} />}
        <Story />
        <FooterTwo />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
