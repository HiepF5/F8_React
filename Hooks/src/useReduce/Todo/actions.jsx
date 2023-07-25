import { SET_ACTION, ADD_ACTION,DELETE_ACTION } from "./constants"
export const setJob = (payload) => {
  return {
    type: SET_ACTION,
    payload
  }
}
export const addJob = (payload) => {
  return {
    type: ADD_ACTION,
    payload
  }
}
export const deleteJob = (payload) => {
  return {
    type: DELETE_ACTION,
    payload
  }
}