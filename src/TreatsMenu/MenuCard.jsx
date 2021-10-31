import React from "react";

function MenuCard({
  sourceImage,
  titleText,
  descTxt,
  halfPrice,
  fullPrice,
  isCookie,
}) {
  return (
    <div id="menu-card-container">
      <img src={sourceImage} alt={sourceImage}></img>
      <div id="menu-card-overlay">
        <p>{descTxt}</p>
      </div>
      <div id="menu-card-desc">
        <h3>{titleText}</h3>
        <p>{halfPrice}</p>
        <p>{fullPrice}</p>
      </div>
    </div>
  );
}

export default MenuCard;
