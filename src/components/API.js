import axios from 'axios';
// import React from 'react';

const API = () => {
  const _api = axios.create({
    baseURL: 'https://satangcorp.com',
    headers:{
      Authenticator: 'someToken'
    }
  })
  // _api.defaults = {
  //   baseURL: 'https://satangcorp.com',

  // }
  return _api
};

export default API()
