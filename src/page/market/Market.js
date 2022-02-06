import { Col, Row } from 'antd';
import React from 'react';
import BoardFactory from '../../components/board/BoardFactory';

// const action = (type) => {
//   return store.dispatch({ type })
// }


export const Market = () => {
  return (
    <Row>
      <Col>
        {/* <BoardFactory value={store.getState()} onSelect={() => action('INCREMENT')} /> */}
      </Col>
    </Row>
  )
};


