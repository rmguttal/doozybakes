import React from "react";

function MenuCard({ sourceImage, titleText, descTxt }) {
  return (
    <div id="menu-card-container">
      <img src={sourceImage} alt={sourceImage}></img>
      <div id="menu-card-overlay">
        <p>{descTxt}</p>
      </div>
      <div id="menu-card-desc">
        <h3>{titleText}</h3>
      </div>
    </div>
  );
}

export default MenuCard;
