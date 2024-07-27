import React from "react";

function List() {
  const students = [
    {
      id: 1,
      name: "Muski",
    },
    {
      id: 2,
      name: "Danish",
    },
  ];

  return(
    <ul>
        {students.map((student) => {
            return <li key={student.id.toString}>{student.name}</li>;
        })
    }
    </ul>
  )
}

export default List