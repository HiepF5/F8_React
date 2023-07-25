import React, { useEffect, useRef, useState } from 'react'

function TimeCount() {
  const [count, setCount] = useState(60)
  const timerId = useRef()
  const prevCount = useRef()
  useEffect(() => {
    prevCount.current = count
  }, [count])
  console.log(timerId.current)
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
    }, 1000)
    console.log('start ->', timerId.current)
  }
  const handleStop = () => {
    clearInterval(timerId.current)
    console.log('Stop => ', timerId.current)
  }
  console.log(count, prevCount.current)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default TimeCount
