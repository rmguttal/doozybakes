import React from "react";

function BoxText({ titleText, descText, img, reverse }) {
  const imgDiv = <img src={img} alt={img} />;
  const textBoxDiv = (
    <div id="text-box-div">
      <h2>{titleText}</h2>
      <p>{descText}</p>
    </div>
  );

  return (
    <div className="hcontainer">
      {reverse ? (
        <>
          {textBoxDiv} {imgDiv}
        </>
      ) : (
        <>
          {imgDiv} {textBoxDiv}
        </>
      )}
    </div>
  );
}

export default BoxText;
