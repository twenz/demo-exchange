import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }

// export function getExchangeApi(type) {
//   debugger
//   return exchange(type)
// }
export function* helloSaga() {
  console.log('Hello Sagas!')
}
export default function* root(type) {
  yield all([
    helloSaga()
  ])
}