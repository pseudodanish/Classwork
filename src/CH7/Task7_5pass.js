import React from "react";
import Table from "./Task7_5read";

function TableProps(){
    const s1={
        sname:"abc",
        roll:121,
        tm1:23,
        tm2:24
    }
    const s2={
        sname:"xyz",
        roll:122,
        tm1:19,
        tm2:21
    }

    return(
        <>
            <Table attr={s1}/>
            <Table attr={s2}/>
        </>
    )
}

export default TableProps
