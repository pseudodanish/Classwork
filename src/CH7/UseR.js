import React from "react";
import { useReducer } from "react";


function reducer(state,action){
    return state+action
}

function Ur(){
    const [state,dispatch] =useReducer(reducer,20)

    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch(5)}>Add</button>
        </>
    )
}
export default Ur