import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="general-container">
      <Header />
      <Form />
      <Meme />
    </div>
  );
}

export default App;
