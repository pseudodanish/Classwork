import React,{ createContext } from "react";

import Ex2 from "./Task7_Ex2"

const info=createContext()

function Ex1(){
    
    return(
        <>
            <info.Provider value={"Student"}>
                <Ex2/>
            </info.Provider>
        </>
    )
}
export default Ex1;
export {info}