import React, { useState } from "react";

const SimpleMaths = () => {
  const [sum, setSum] = useState(0);
  const [diff, setDiff] = useState(0);
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);
  const change1 = (e) => {
    setNo1(parseInt(e.target.value));
  };
  const change2 = (e) => {
    setNo2(parseInt(e.target.value));
  };
  const add = () => {
    setSum(parseInt(no1) + parseInt(no2));
  };
  const sub = () => {
    setDiff(parseInt(no1) - parseInt(no2));
  };
  return (
    <>
      <div>
        <input type="number" onChange={change1}></input>
      </div>
      <div>
        <input type="number" onChange={change2}></input>
      </div>
      <div>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Subtract</button>
      </div>
      <div>
        <h1>Sum: {sum}</h1>
      </div>
      <div>
        <h1>Difference: {diff}</h1>
      </div>
    </>
  );
};

export default SimpleMaths;
