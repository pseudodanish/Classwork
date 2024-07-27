// Write React js app to perform the task as asked below
// 1) Add 2 buttons and increment count by 1 with each click 
// 2) Dispaly alert as an effect on specified conditions 
        // 1) Effect will be triggered only one page rendered for the first time(Empty array).
        // 2) Effect will be triggered every time button A is clicked(Array with Value).

import React, { useState } from 'react'
import { useEffect } from 'react'

function UseEffect() {
    const [Count,setCount]=useState(0)
    const [Calc,setCalc]=useState(0)

    useEffect(()=>{
        alert("clicked")
    },[Count]);

    function ChangeCount(){
        setCount(Count+1)
    }

    function ChangeCalc(){
        setCalc(Calc+1)
    }

  return (
    <>
        <button onClick={ChangeCount}>Button A {Count}</button>
        <button onClick={ChangeCalc}>Button B {Calc}</button>
    </>
  )
}

export default UseEffect