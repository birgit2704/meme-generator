import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ReactPdfPrint = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "my-meme",
    onAfterPrint: () => alert("Print success"),
  });

  return (
    <>
      <div
        className="meme"
        ref={componentRef}
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        <img className="meme-image" src={props.meme.randomImage} alt="meme" />
        <h2 className="meme-text top">{props.meme.topText}</h2>
        <h2 className="meme-text bottom">{props.meme.bottomText}</h2>
      </div>
      <button className="form-cta" onClick={handlePrint}>
        Print my meme
      </button>
    </>
  );
};

export default ReactPdfPrint;
