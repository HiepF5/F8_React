import React from 'react'

function Todo({todoLists}) {
  return (
    <>
    <ul>
      {todoLists.map((todo,index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
    </>
  )
}

export default Todo
