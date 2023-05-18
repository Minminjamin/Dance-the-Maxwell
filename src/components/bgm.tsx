import React from "react";
import ReactHowler from "react-howler";

const bgm = () => {
  return (
    <ReactHowler src={"/asset/music/Maxwell__Cat_Theme.mp3"} loop={true} />
  );
};

export default bgm;
