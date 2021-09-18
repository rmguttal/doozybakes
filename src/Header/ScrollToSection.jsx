import React from "react";
import { Link } from "react-scroll";

function ScrollToSection({ titleText, idTxt }) {
  return (
    <button className="btn-style btn-style-header">
      <Link
        activeClass="active"
        to={idTxt}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {titleText}
      </Link>
    </button>
  );
}

export default ScrollToSection;
