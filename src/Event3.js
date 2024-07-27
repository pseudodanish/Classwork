import React from "react";

function Event3() {
  function handledoubleclick() {
    alert("Welcome To Hell Twice");
  }

  return (
    <>
      <center>
        <button onDoubleClick={handledoubleclick}>Click Here</button>
      </center>
    </>
  );
}

export default Event3;
