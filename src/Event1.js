import React from "react";

function Event1() {
  function handleclick() {
    alert("Welcome To Hell");
  }

  return (
    <>
      <center>
        <button onClick={handleclick}>Click Me</button>
      </center>
    </>
  );
}

export default Event1;
