// export default function counter(state = 0, action) {
//   // yield 
//   debugger
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     default:
//       return state

import { combineReducers } from "redux"
import { API } from "../service/API"
import { BTC_THB, BUSD_THB, GET_ALL_EXCHANGE, USDT_THB } from "./actions"

//   }
const getExch = async (action) => {
  try {
    const data = (await API.get('/api/v3/ticker/24hr', { params: { symbol: action.type.toLowerCase() } })).data
    // debugger
    return data
  } catch (error) {
    return {}
  }
};

export async function fnc1(state = {}, action) {
  // yield 
  // debugger
  switch (action.type) {
    case GET_ALL_EXCHANGE:
      return { all: 'wait' }
    case BTC_THB:
      return await getExch(action)
    case BUSD_THB:
      return await getExch(action)
    case USDT_THB:
      return await getExch(action)
    default:
    // return state
  }

  // debugger
  return await state

  // try {
  //   const cart = yield select(getCart)
  //   yield call(api.buyProducts, cart)
  //   yield put(actions.checkoutSuccess(cart))
  // } catch (error) {
  //   yield put(actions.checkoutFailure(error))
  // }
}
export function fnc2(state = 'f2', action) {
  // yield 
  // debuggerc
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