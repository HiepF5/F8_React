import React, { useCallback, useState } from 'react'
import Content from './Content'

function AppCallback() {
  const [count, setCount] = useState(0)
  const handleIncrease = useCallback(() =>{
    setCount(prevCount => prevCount +1 )
  },[])
  
  return (
    <>
      <Content onIncrease={handleIncrease}/>
      <h1>{count}</h1>
      {/* <button onClick={handleIncrease}>Click me!</button> */}
    </>
  )
}

export default AppCallback