import React from "react";
import {useState} from "react";

function Us(){
    const [count, setCount] = useState(0);
    function handle(){
        setCount(count+1);
    }

    return(
        <>
            <button onClick={handle}>Click Me</button>
            <h1>{count}</h1>
        </>
    )
}

export default Us