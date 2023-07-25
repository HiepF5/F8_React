import React, { useState } from 'react'

function Count() {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () =>{
    setCounter(counter + 1);
    console.log('render' + counter)
  }

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleIncrease}>Increase</button>
    </>
  )
}

export default Count
