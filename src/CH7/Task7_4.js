// Write a program to build a react app having 2 input fields and display the entered value on the same page using usestate hooks.
import React from "react";
import { useState } from "react";

function Input(){
    const [First,setFirstName]=useState("")
    const [Last,setLastName]=useState("")

    function changeFirstName(e){
        setFirstName(e.target.value)
    }
    function changeLastName(e){
        setLastName(e.target.value)
    }

    return(
        <>
            <input type="text" placeholder="Enter your FirstName"  value={First} onChange={changeFirstName}/>
            <input type="text" placeholder="Enter your LastName"  value={Last} onChange={changeLastName}/>

            <h1>
                {First}, {Last}
            </h1>
        </>
    )
}

export default Input