// Write A react js code to filter out the numbers greater than 6 using filter function

import React from "react";

function Filter6() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 9];
  const newarr = arr.filter((num) => {
    if (num < 6) {
      return false;
    } else {
      return true;
    }
  });

  var arr1 = arr.join(",");
  var arr2 = newarr.join(",");

  return (
    <>
      <center>
        <h1>Initialised array : {arr1}</h1>
        <h1>Updated array : {arr2}</h1>
      </center>
    </>
  );
}
export default Filter6
