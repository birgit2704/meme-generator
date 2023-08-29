import React from "react";
import memeimg from "../assets/memeimg.png";

function Meme() {
  return (
    <div className="meme-container">
      <img src={memeimg} alt="meme" />
    </div>
  );
}

export default Meme;
