export const GET_ALL_EXCHANGE = 'GET_ALL_EXCHANGE'
export const SEE_EXCHANGE = 'SEE_ALL_EXCHANGE'
export const BTC_THB = 'BTC_THB'
export const USDT_THB = 'USDT_THB'
export const BUSD_THB = 'BUSD_THB'



export function getExchangeAction(type, data) {
  debugger
  return {
    type: type,
    data,
  }
}