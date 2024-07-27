import React from 'react'

// Props data is in APp.js
const Ex2 = (props) => {
  return (
    <div>
        <ul>
            <li>{props.name}</li>
            <li>{props.rollno}</li>
            <li>{props.marks}</li>
        </ul>
    </div>
  )
}

export default Ex2