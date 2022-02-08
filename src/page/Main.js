import { Button } from 'antd';
import React from 'react';
import { connect, useStore, useSelector } from 'react-redux';
import { getExchange } from '../redux-saga/sagas';
import { getExchangeAction, GET_ALL_EXCHANGE, SEE_ALL_EXCHANGE } from '../redux-saga/actions';
import Market from './market/Market';
import { fnc1 } from '../redux-saga/reducers'
  ;
import MainLayout from '../components/MainLayout';


const Main = (props) => {
  const store = useStore()
  const action = (type, t) => store.dispatch({ type, t })
  const counter = useSelector((state) => state)
  // console.log('store.getState()', store.getState());
  // debugger
  return (
    <div>
      mm
      {/* <Market handleClick={() => action(GET_ALL_EXCHANGE, 'df')} value={counter.fnc1} />
      <Market handleClick={() => action(SEE_ALL_EXCHANGE)} value={counter} /> */}
    </div>
  )
}

// export default connect(
//   // state => ({ getdata: getExchange('ss') }),
//   // { GET_ALL_EXCHANGE }

// )(Main)

export default Main