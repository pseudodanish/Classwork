//1) Add 3 button name changeText,changeColor and hide/show
//2) Add heading lj uni in red color and also react js hook text in h2
//3) By Clicking on changeText button, button text should be change to welcome student
//4) By Clicking on changeColor button, button text color should change to blue these color  change should perform while double clicking on button
//5) Initially button text should be hide while clicking on the button, text should be changed to show from hidden and text react js hooks will not be shown
import React from "react";
import { useState } from "react";

function AllTasks() {
  const [Text, setText] = useState("LJ University");
  const [name, setName] = useState("Hide");
  const [Color, setColor] = useState("red");
  const [d_style, setStyle] = useState("block");
  function changeText() {
    if (Text=="LJ University"){
      setText("Welcome Student");
    }else {
      setText("LJ University")
    }
  }

  function changeColor() {
    if (Color == "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }

  function changeOpacity() {
    if (name == "Hide") {
      setName("Show");
      setStyle("none");
    } 
    else {
      setName("Hide");
      setStyle("block");
    }
  }
  return (
    <>
      <h2 style={{ display: d_style, color: Color }}>{Text}</h2>

      <button onClick={changeText}>Click To Change Text</button>
      <button onDoubleClick={changeColor}>Click To Change Color</button>
      <button onClick={changeOpacity}>{name}</button>
    </>
  );
}

export default AllTasks;
