import React from "react";
import SectionHeading from "../shared/SectionHeading";
import BoxText from "./BoxText";
import img1 from "../assets/doozy media from wix/IMG-20210325-WA0014_edited.jpg";
import img2 from "../assets/doozy media from wix/IMG_2511.JPG_edited.jpg";

function AboutUs({ id }) {
  const desc1 =
    "At Doozy, we strive to elevate simple whole ingredients to gourmet flavours. Nothing makes us happier than freshly made food and that is why our orders start with using fresh ingredients.";
  const desc2 =
    "We wish to make your everyday into a little celebration. Whether it is some 'me time' with your daily joyous cuppa that you look forward to or eating sweet treats with your loved ones. We would love for you to think of Doozy's heartwarming and cozy treats in every such celebration.";
  return (
    <div id={id} className="section">
      <SectionHeading titleText="About Us" />
      <BoxText titleText="Our Story" descText={desc1} img={img1} />
      <BoxText titleText="We Believe" descText={desc2} img={img2} reverse />
    </div>
  );
}

export default AboutUs;
