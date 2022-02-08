import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://satangcorp.com',
  headers: {
    Authenticator: 'someToken'
  }
})




