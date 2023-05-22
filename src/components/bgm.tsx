import React from "react";
import ReactHowler from "react-howler";

const Bgm = () => {
  return (
    <ReactHowler
      src={`${process.env.PUBLIC_URL}/asset/music/Maxwell__Cat_Theme.mp3`}
      loop={true}
    />
  );
};

export default Bgm;
