import React from 'react'
import {memo} from 'react'

function Content() {
  console.log('render')
  return (
    <div>Content</div>
  )
}

export default memo(Content)