/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import tableVideo from "../assets/doozy media from wix/tableVideo.mp4";
import HeaderMenu from "./HeaderMenu";
import logoTxt from "../assets/doozy media from wix/Doozy text.png";
import logoCircle from "../assets/doozy media from wix/inner circle.png";
import logoOuterCircle from "../assets/doozy media from wix/outer circle.png";

function Header() {
  return (
    <div className="divHeaderMain">
      <div className="divHeaderLogo">
        <img
          src={logoTxt}
          alt={logoTxt}
          className="imgHeaderLogo imgHeaderLogo-txt-writeon"
          style={{ zIndex: "5" }}
        />
        <img
          src={logoCircle}
          alt={logoCircle}
          className="imgHeaderLogo"
          style={{ zIndex: "4" }}
        />
        <img
          src={logoOuterCircle}
          alt={logoOuterCircle}
          className="imgHeaderLogo imgHeaderLogo-rotate"
          style={{ zIndex: "4" }}
        />
      </div>
      <div className="divHeaderVideo">
        <video className="videoHeaderVideo" autoPlay loop muted playsinline>
          <source src={tableVideo} type="video/mp4" />
        </video>
      </div>
      <HeaderMenu />
    </div>
  );
}

export default Header;
