import React from "react";
import bmw from "./bmw.jpeg";
import toji from "./toji.png";

function Mapexample() {
  const img = [
    {
      id: 1,
      pic: bmw,
    },
    {
      id: 2,
      pic: toji,
    },
  ];
  return (
    <>
      {img.map((val) => {
        return <img src={val.pic} alt={val.id} width="50%" height="1500px" />;
      })}
    </>
  );
}

export default Mapexample;
