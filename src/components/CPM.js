import { Button, Col, Row } from 'antd';
import React from 'react';
import { useSelector, useStore } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { BTC_THB, USDT_THB } from '../redux-saga/actions';

const basePath = '/market'
const CPM = () => {
  // const _param = useLocation()
  // console.log('file: CPM.js ~ line 9 ~ _param', _param)
  const navi = useNavigate()
  // debugger
  // console.log('file: CPM.js ~ line 10 ~ navi', navi.name)
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
            navi(basePath + '/BTC_THB')
          }}>
            BTC
          </Button>
        </Row>
        <Row>
          <Button onClick={() => {
            action(USDT_THB, 'api')
            navi(basePath + '/USDT_THB')
          }}>
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