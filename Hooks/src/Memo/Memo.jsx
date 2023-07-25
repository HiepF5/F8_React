import React, { useState } from 'react'
import Content from './Content'

function Memo() {
  const [count, setCount] = useState(0)
  const handleIncrease = () =>{
    setCount(prevCount => prevCount +1 )
  }
  
  return (
    <>
      <Content/>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Click me!</button>
    </>
  )
}

export default Memo