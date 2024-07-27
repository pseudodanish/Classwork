import React from "react";
// Props data is in APp.js
const Ex3 = (props) => {
  return (
    <div>
      <center>
        <h1>Car Brand:{props.car.brand}</h1>
        <h2>Car Name:{props.car.name}</h2>
      </center>
    </div>
  );
};

export default Ex3;
