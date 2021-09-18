import React from "react";
import Divider from "./Divider";

function SectionHeading({ titleText }) {
  return (
    <div id="section-heading">
      <Divider />
      <h1>{titleText}</h1>
      <Divider />
    </div>
  );
}

export default SectionHeading;
