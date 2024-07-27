import React from "react";

function Filter() {
  const arr = [1, 2, 3, 5, 6, 3, 4, 3];
  const newarr = arr.filter((num) => {
    if (num == 3) {
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
        <h2>Initialised Array : {arr1}</h2>
        <h2>Updated Array : {arr2}</h2>
      </center>
    </>
  );
}

export default Filter;
