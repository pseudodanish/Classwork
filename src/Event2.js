import React from "react";

function Event2() {
  function handlechange(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <center>
        Enter Text: 
        <input type="text" onChange={handlechange} />
      </center>
    </>
  );
}

export default Event2;
