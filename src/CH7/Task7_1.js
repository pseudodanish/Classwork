// Create a program to build a react app gaving buttons to increment and decrement the number by clicking that respectivebutton. also incremnt of the num should be perform only if num is < tjham 10 and decrement of nu should be > than 0
import React from "react";
import { useState } from "react";

function Increment() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <button onClick={handleIncrement}>Click To Increment</button>
      <h1>{count}</h1>

      <button onClick={handleDecrement}>Click To Decrement</button>
      
    </>
  );
}

export default Increment
