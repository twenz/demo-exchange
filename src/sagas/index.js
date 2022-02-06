// import API from "../components/API";
// import { BTC_THB, BUST_THB, USDT_THB } from '../action/index'



// export async function getData(params) {
//   const _params = !!params ? {
//     params: {
//       symbol: JSON.stringify().toLowerCase(params)
//     }
//   } : {}
//   const xxx = API.get(`/api/v3/ticker/24hr`, _params).then(e => e.data)
//   console.log('file: index.js ~ line 23 ~ xxx', xxx)
//   return _params
// };

// const getExchanges = (state = {}, action) => {
//   switch (action.type) {
//     case BTC_THB:
//       return getData(BTC_THB)
//     // case BUST_THB:
//     //   return (state % 2 !== 0) ? state + 1 : state
//     // case USDT_THB:
//     //   return state - 1
//     default:
//       return getData()
//   }
// };

// import { takeEvery } from 'redux-saga/effects'
// import Api from './path/to/api'

// function* watchFetchProducts() {
//   yield takeEvery('PRODUCTS_REQUESTED', fetchProducts)
// }

// function* fetchProducts() {
//   const products = yield Api.fetch('/products')
//   console.log(products)
// }