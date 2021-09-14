import React from "react";
import Divider from "./Divider";
import "./StyleSheet.css";

function SectionHeading({ titleText }) {
  return (
    <div className="divSectionHeadingMain">
      <div className="divSectionHeadingSecond">
        <Divider />
      </div>
      <div className="divSectionHeadingTxt">{titleText}</div>
      <div className="divSectionHeadingSecond">
        <Divider />
      </div>
    </div>
  );
}

export default SectionHeading;
