import React from "react";
import dunkVideo from "./assets/doozy media from wix/28 - InShot_20210809_162640100.mp4";

function MiddleVideo() {
  return (
    <div className="divMiddleVideo">
      <video autoPlay loop muted className="videoMiddleVideo">
        <source src={dunkVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default MiddleVideo;
