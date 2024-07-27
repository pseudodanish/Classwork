// to pass product images name price as property from one component to another
// Add an array of object with pic name and price propertu of two product
// display image name price of product in browser using map method
import React from "react";

function P1(props) {
  return (
    <>
      {props.info.map((pr) => {
        return (
          <div
            style={{
              display: "inline-block",
              marginRight: "50px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img src={pr.pic} />
            <h1>{pr.name}</h1>
            <h1>{pr.price}</h1>
          </div>
        );
      })}
    </>
  );
}

export default P1;
