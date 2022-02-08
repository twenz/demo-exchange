import { all, call, put, takeEvery } from 'redux-saga/effects'
import { GET_ALL_EXCHANGE, SEE_ALL_EXCHANGE } from './actions'

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }

export function* getExchange() {
  // debugger
  yield put({ type: GET_ALL_EXCHANGE })
}

// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }
export default function* watchExchange() {
  // debugger 
  yield takeEvery(SEE_ALL_EXCHANGE, getExchange)
}