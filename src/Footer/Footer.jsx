import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="section">
      <button className="btn-style btn-style-footer" onClick={scrollToTop}>
        Back to Top
      </button>
    </div>
  );
}

export default Footer;
