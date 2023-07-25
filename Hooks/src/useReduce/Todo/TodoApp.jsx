import React, { useReducer} from 'react'
import { useRef } from 'react'
import reduce, {initState } from './reducer';
import { setJob, addJob, deleteJob } from './actions';
import logger from './logger';
function TodoApp() {
  const [state, dispatch] = useReducer(logger(reduce), initState)
  const { job, jobs } = state;
  const inputRef = useRef()
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();
    
  }
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

export default TodoApp
