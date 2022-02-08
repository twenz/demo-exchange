
import { combineReducers } from "redux"
import { API } from "../service/API"
import { BTC_THB, BUSD_THB, GET_ALL_EXCHANGE, USDT_THB } from "./actions"

const getExch = async (action) => {
  try {
    const data = await API.get('/api/v3/ticker/24hr', { params: { symbol: action.type.toLowerCase() } }).then(e => e.data)
    return data
  } catch (error) {
    return {}
  }
};

export async function fnc1(state = {}, action) {
  // debugger
  switch (action.type) {
    case GET_ALL_EXCHANGE:
      return { all: 'wait' }
    case BTC_THB:
      return getExch(action)
    case BUSD_THB:
      return getExch(action)
    case USDT_THB:
      return getExch(action)
    default:
    return state
  }
}
export function fnc2(state = 'f2', action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 2
    default:
      return state
  }
}

export default combineReducers({
  fnc1,
  fnc2,
}) 