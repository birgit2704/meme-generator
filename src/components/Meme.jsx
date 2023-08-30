import React, { useState } from "react";
import data from "../../memesData.js";

function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * data.data.memes.length);
    setMemeImage(data.data.memes[randomIndex].url);
  }

  return (
    <div className="form-container">
      <div className="form-input-container">
        <input type="text" name="" id="" placeholder="Top text" />
        <input type="text" name="" id="" placeholder="Bottom text" />
      </div>
      <button className="form-cta" onClick={getMemeImage}>
        Get a new meme image
      </button>
      <img className="meme-image" src={memeImage} alt="meme" />
    </div>
  );
}

export default Meme;
