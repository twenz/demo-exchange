import { all, call, put, takeEvery } from 'redux-saga/effects'
import { GET_ALL_EXCHANGE, SEE_ALL_EXCHANGE } from './actions'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

export function* getExchange() {
  // debugger
  // yield call(e => 'res' /* API */)
  yield put({ type: GET_ALL_EXCHANGE }) // call get all
}

// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }
export default function* watchExchange() {
  // debugger 
  yield takeEvery(SEE_ALL_EXCHANGE, getExchange)
}
// export default function* rootSaga() {
//   yield all([
//     // helloSaga(),
//     watchExchange()
//     // watchIncrementAsync()
//   ])
// }