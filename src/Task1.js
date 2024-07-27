// Create react app to perfom the task as asked below
// Add array of five objects with properties name and age check if age  is greater than fifty then display person name of who are greater than 50 age using map function.
import React from 'react'

function MapTask() {
    const persons=[{
        name:"Danish",
        age:21
    },{
        name:"Musking",
        age:18
    },{
        name:"Mawiya",
        age:24
    },{
        name:"Sukuna",
        age:100
    },{
        name:"Anos",
        age:180
    }
    ]
  return (
    <>
      {
        persons.map((value)=>{
            if(value.age>50){
                return value.name
            }
        })
      }
    </>
  )
}

export default MapTask