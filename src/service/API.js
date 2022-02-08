import axios from 'axios';
import React from 'react';

// const API = () => {
export const API = axios.create({
  baseURL: 'https://satangcorp.com',
  headers: {
    Authenticator: 'someToken'
  }
})
// return api()
// };
// const API = {
//   API: api
// }
export default {
  API
}


