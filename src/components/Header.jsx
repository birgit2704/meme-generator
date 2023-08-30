import React from "react";
import trollface from "../assets/trollface.png";

function Header() {
  return (
    <div className="header-container">
      <img className="header-img" src={trollface} alt="troll face" />
      <h1 className="header-title">Meme Generator</h1>
      <h3 className="header-desc">React Project</h3>
    </div>
  );
}

export default Header;
