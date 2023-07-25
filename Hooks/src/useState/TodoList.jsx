import React, { useState } from 'react'
import Todo from './Todo'

function TodoList() {
  const [todo, setTodo] = useState('')
  const [todoLists, setTodoLists] = useState(()=>{
    const storageTodos = JSON.parse(localStorage.getItem('todos'))
    return storageTodos ?? [];
  })

  console.log(todo)
  const handleTodo = () => {
    setTodoLists((prev) => {
      const newTodo = [...prev, todo];
      
      const jsonTodos = JSON.stringify(newTodo);
      localStorage.setItem('todos', jsonTodos)
      return newTodo
    })
    setTodo('')
  }
  return (
    <>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleTodo}>Add</button>
      <Todo todoLists={todoLists} />
    </>
  )
}

export default TodoList
