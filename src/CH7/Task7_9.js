import React from "react";
import { useReducer } from "react";


function reducer(state,action){
    return state+action
}

function Inc1(){
    const [state,dispatch] =useReducer(reducer,19)

    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch(1)}>Add</button>
        <button onClick={()=>dispatch(-1)}>Sub</button>
        </>
    )
}
export default Inc1