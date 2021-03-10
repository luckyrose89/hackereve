import React from "react";

import Header from "./components/header/header";
import "./App.scss";
import Story from "./pages/story";

function App() {
  return (
    <div className="page-layout">
      <Header></Header>
      <Story />
    </div>
  );
}

export default App;
