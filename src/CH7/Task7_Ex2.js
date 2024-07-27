import React from "react";
import { useContext } from "react";
import {style} from "./Task7_Ex";
import {info} from "./Task7_Ex1";

function Ex2(){
    const d=useContext(info)
    const s=useContext(style)

    return(
        <>
            <h1 style={s}>{d}</h1>
        </>
    )
}
export default Ex2