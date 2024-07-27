import React from "react";
import { useState } from "react";

function F2(){
    const[textArea,settextArea]=useState("")

    function handleSubmit(event){
        event.preventDefault();
        alert(`Address is ${textArea}`)
    }

    function handle(event){
        settextArea(event.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                Address:<textarea value={textArea} onChange={handle}></textarea>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default F2