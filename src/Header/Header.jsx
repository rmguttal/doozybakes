/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import tableVideo from "../assets/doozy media from wix/tableVideo.mp4";
import HeaderMenu from "./HeaderMenu";
import logoTxt from "../assets/doozy media from wix/Doozy text.png";
import logoCircle from "../assets/doozy media from wix/inner circle.png";
import logoOuterCircle from "../assets/doozy media from wix/outer circle.png";

function Header() {
  return (
    <div id="header-main">
      <div id="header-logo">
        <img src={logoTxt} alt={logoTxt} id="logo-text" className="test" />
        <img src={logoCircle} alt={logoCircle} id="logo-inner-circle" />
        <img
          src={logoOuterCircle}
          alt={logoOuterCircle}
          id="logo-outer-circle"
        />
      </div>
      <div id="header-video-container">
        <video id="header-video" autoPlay loop muted playsinline>
          <source src={tableVideo} type="video/mp4" />
        </video>
      </div>
      <HeaderMenu />
    </div>
  );
}

export default Header;
