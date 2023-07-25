import React from 'react'
import { memo } from 'react'

function Content({onIncrease}) {
  console.log('render')
  return (
    <>
      <div>Content</div>
      <button onClick={onIncrease}>Click me!</button>
    </>
  )
}

export default memo(Content)
