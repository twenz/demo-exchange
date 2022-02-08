import { Button, Col, Row } from 'antd';
import React from 'react';
import { useSelector, useStore } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BTC_THB } from '../redux-saga/actions';

const CPM = () => {
  // const _param = useParams()
  const store = useStore()
  const action = (type, service) => store.dispatch({ type, service })
  const value = useSelector((state) => state)
  console.log('file: CPM.js ~ line 12 ~ value', value)
  return (
    <>
      <Col>
        <Row>
          <Button onClick={() => {
            action(BTC_THB, 'api')
            // window.location.replace('BTC_THB')
          }}>
            BTC
          </Button>
        </Row>
        <Row>
          <Button onClick={() => window.location.replace('USDT_THB')}>
            USDT_THB
          </Button>
        </Row>
      </Col>
      <Col>
        {/* {simbol} */}
      </Col>
    </>
  )
}
export default CPM