import { SET_ACTION, ADD_ACTION,DELETE_ACTION } from "./constants"

export const initState = {
  job: '',
  jobs: []
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
export default reduce