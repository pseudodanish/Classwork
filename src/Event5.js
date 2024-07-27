import React from 'react'

function Event5() {
    const arr=[2,4,6,7,8,9]
  return (
    <>
      {
        arr.map((value)=>{
            return <h1>Array Elements :{value*6}</h1>
        })
      }
    </>
  )
}

export default Event5