import { Button, Skeleton } from 'antd';
import React from 'react';
import { useStore } from 'react-redux';
import { BTC_THB } from '../action';
// import { useStore } from 'react-redux';
import BoardFactory from '../components/board/BoardFactory';

const Main = (props) => {
  const store = useStore()
  const action = (type) => {
    // debugger
    return store.dispatch({ type })
  }
  const _getStore = store.getState()

  // const _getStore = async () => {
  //   const _getStore = await store.getState()
  //   return _getStore
  // };
  // if (!_getStore) return <Skeleton />

  // debugger
  // console.log('file: Main.js ~ line 6 ~ props', props)
  return (
    <div>
      <Button>Test</Button>
      <div>
        <BoardFactory value={_getStore} onSelect={() => action(BTC_THB)} />
      </div>
    </div>
  )
}

export default Main;
