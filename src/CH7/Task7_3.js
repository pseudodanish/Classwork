// Write a program to build a react app having a button name changeImage which changes images by clicking it .
import React from "react";
import nigga from "../nigga.png";
import mommy from "../mommy.png";
import { useState } from "react";

function Img() {
  const [Image, setImg] = useState(nigga);

  function changeImage() {
    if (Image == nigga) {
      setImg(mommy);
    } else {
      setImg(nigga);
    }
  }
  return (
    <>
        <img src={Image}></img>
        <br></br>
      <button onClick={changeImage}>Click To Change Image</button>
    </>
  );
}

export default Img;
