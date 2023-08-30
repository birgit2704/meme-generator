import React, { useState } from "react";
import data from "../../memesData.js";

function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * data.data.memes.length);
    setMemeImage(data.data.memes[randomIndex].url);
    console.log(memeImage);
  }

  return (
    <div className="form-container">
      <div className="form-input-container">
        <input type="text" name="" id="" placeholder="Shut up" />
        <input type="text" name="" id="" placeholder="and take my money" />
      </div>
      <button className="form-cta" onClick={getMemeImage}>
        Get a new meme image
      </button>
      <img className="meme-image" src={memeImage} alt="meme" />
    </div>
  );
}

export default Meme;
