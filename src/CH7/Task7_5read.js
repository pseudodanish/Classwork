import React from 'react';

function Table(props){
    return(
        <>
            <table border={1}>
                <tr>
                    <td>Student Name</td>
                    <td>{props.attr.sname}</td>
                </tr>
                <tr>
                    <td>Roll No</td>
                    <td>{props.attr.roll}</td>
                </tr>
                <tr>
                    <td>Marks</td>
                    <td>T1:{props.attr.tm1},T2:{props.attr.tm2}</td>
                </tr>
            </table>
        </>
    )
}

export default Table;