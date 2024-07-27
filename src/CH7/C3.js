import React from 'react';
import { useContext } from 'react';
import {Fname,Lname} from "./Pc";

function C3() {
    const Fn=useContext(Fname);
    const Ln=useContext(Lname);

    return (
    <>
        <h1>Welcome {Fn} {Ln}</h1>
    </>
  )
}

export default C3