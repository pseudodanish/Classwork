import React from "react";

function Event4() {
  function handlesubmit(e) {
    e.preventDefault();
    alert("Submit To Lucifer");
  }

  return (
    <>
      <center>
        <form onSubmit={handlesubmit}>
          <button>Click To Submit</button>
        </form>
      </center>
    </>
  );
}

export default Event4;
