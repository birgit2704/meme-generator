import React from "react";
import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="general-container">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
