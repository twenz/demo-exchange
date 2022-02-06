// export default function counter(state = 0, action) {
//   // yield 
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'INCREMENT_IF_ODD':
//       return (state % 2 !== 0) ? state + 1 : state
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
import { combineReducers } from 'redux';
import { BTC_THB, BUST_THB, USDT_THB } from '../action/index'
import API from '../components/API';

const getData = async (params) => {
  // debugger
  const _params = !!params ? {
    params: {
      symbol: params.toLowerCase()
    }
  } : {}
  // debugger
  const xxx = await API.get(`/api/v3/ticker/24hr`, _params).then(e => e.data)
  // console.log('file: index.js ~ line 23 ~ xxx', xxx)
  return xxx
};

const getExchanges = async (state = [], action) => {
  // debugger
  switch (action.type) {
    case BTC_THB:
      return getData('btc_thb')
    // case BUST_THB:
    //   return (state % 2 !== 0) ? state + 1 : state
    // case USDT_THB:
    //   return state - 1
    default:
      return getData()
  }
};

const rootReducer = combineReducers({
  getExchanges
})

export default rootReducer