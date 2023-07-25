import React, { useReducer, useState } from 'react'
// Init state
const initState = 0
// Action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// Reduce
const reduce = (state, action) => {
  console.log('render reduce')
  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default: 
      throw new Error('Invalid action')
  }
}
// Dispatch

function AppReduce() {
  const [count, dispatch] = useReducer(reduce, initState)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  )
}

export default AppReduce
