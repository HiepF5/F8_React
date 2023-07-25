import React, { useReducer, useState } from 'react'
import { useRef } from 'react'
const initState = {
  job: '',
  jobs: []
}
const ADD_ACTION = 'add'
const DELETE_ACTION = 'remove'
const SET_ACTION = 'set'
const setJob = (payload) => {
  return {
    type: SET_ACTION,
    payload
  }
}
const addJob = (payload) => {
  return {
    type: ADD_ACTION,
    payload
  }
}
const deleteJob = (payload) => {
  return {
    type: DELETE_ACTION,
    payload
  }
}
const reduce = (state, action) => {
  switch (action.type) {
    case SET_ACTION:
      return {
        ...state,
        job: action.payload
      }
    case ADD_ACTION:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case DELETE_ACTION:
      console.log('delete')
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1)
      return {
        ...state,
        jobs: newJobs
      }
    default:
      throw new Error('Lỗi')
  }
}
function TodoReduce() {
  const [state, dispatch] = useReducer(reduce, initState)
  const { job, jobs } = state;
  const inputRef = useRef()
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();
    
  }
  const handleDelete =(index)=>{
    console.log(index)
    dispatch(deleteJob(index));
  }
  // console.log(state)
  return (
    <div>
      <h3>Todo</h3>
      <input ref={inputRef} value={job} onChange={(e) => dispatch(setJob(e.target.value))} placeholder='Enter todo...' />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>{item} 
          <span onClick={()=> dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoReduce
