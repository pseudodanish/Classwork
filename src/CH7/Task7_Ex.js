// USe multiple context in react application by creating and consuming them across diff component 
// 1) Create a context for css styling and provide it to ex.js file 
// 2) Create a context for a str value(stu) and provide it to ex1.js file
// 3) Consumes both context and display a msg with the provided style and str(bgcolor,fontcolor,fontsize)

import { React } from "react";
import { createContext } from "react";
import Ex1 from "./Task7_Ex1";

const style=createContext()

function Ex(){
    const myStyle={backgroundColor:"black",color:"white",fontSize:"50px",fontStyle:"italic"}
    return(
        <>
            <style.Provider value={myStyle}>
                <Ex1/>
            </style.Provider>
        </>
    )
}
export default Ex
export {style}