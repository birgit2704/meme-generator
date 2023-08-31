import React, { useState, useEffect } from "react";
import ReactPdfPrint from "./ReactPdfPrint";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/8k0sa.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.length);
    setMeme((prevState) => ({
      ...prevState,
      randomImage: allMemeImages[randomIndex].url,
    }));
  }

  function changeText(event) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="form-container">
      <div className="form-input-container">
        <input
          type="text"
          name="topText"
          onChange={changeText}
          value={meme.topText}
          placeholder="Top text"
        />
        <input
          type="text"
          name="bottomText"
          onChange={changeText}
          value={meme.bottomText}
          placeholder="Bottom text"
        />
      </div>
      <button className="form-cta" onClick={getMemeImage}>
        Get a new meme image
      </button>
      <ReactPdfPrint meme={meme} />
    </div>
  );
}

export default Meme;
