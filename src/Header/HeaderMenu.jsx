import React from "react";
import ScrollToSection from "./ScrollToSection";

function HeaderMenu() {
  return (
    <div id="header-btn-menu">
      <ScrollToSection titleText="About Us" idTxt="aboutUs" />
      <ScrollToSection titleText="Doozy Treats" idTxt="treatsMenu" />
      <ScrollToSection titleText="Testimonials" idTxt="testimonials" />
      <ScrollToSection titleText="Contact" idTxt="contacts" />
    </div>
  );
}

export default HeaderMenu;
