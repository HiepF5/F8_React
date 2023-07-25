import React from 'react'

function logger(reduce) {
  return (prevState, action) =>{
    console.group(action.type)
    console.log('Prev state: ', prevState)
    console.log('Action: ', action)
    const newState = reduce(prevState, action)
    console.log('Next state: ', newState)
    console.groupEnd()
    return newState

  }
}

export default logger