import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://satangcorp.com',
  headers: {
    Authenticator: 'someToken'
  }
})

export const exchange = async (exch) => {
  console.log('file: API.js ~ line 19 ~ exch', exch)
  try {
    debugger
    const data = await API.get('/api/v3/ticker/24hr', { params: { symbol: exch.toLowerCase() } }).then(e => e.data)
    return data
  } catch (error) {
    return {}
  }
}


