
import { combineReducers } from "redux"
import { API, exchange } from "../service/API"
import { BTC_THB, BUSD_THB, GET_ALL_EXCHANGE, SEE_EXCHANGE } from "./actions"

const getExch = (action) => {
  const data = exchange(action.service)
  return data
};

export function fnc1(state = {}, action) {
  debugger
  switch (action.type) {
    case GET_ALL_EXCHANGE:
      return state
    case SEE_EXCHANGE:
      return getExch(action)
    default:
      return state
  }
}

export default combineReducers({
  exchange: fnc1,
}) 