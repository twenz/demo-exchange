import { Button, Col, Row, Skeleton } from 'antd';
import React from 'react';
import { useSelector, useStore } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAsync } from 'react-use';
import { BTC_THB, USDT_THB } from '../redux-saga/actions';

import '../style/styles.sass'


const basePath = '/market'
const CPM = () => {
  const navi = useNavigate()
  const store = useStore()
  const action = (type, service) => store.dispatch({ type, service })
  const value = useSelector((state) => state)
  const { value: data, loading, error } = useAsync(async () => {
    const _data = await value
    return _data.fnc1
  }, [value])
  if (loading) return <Skeleton />
  if (error) console.log('error', error);
  return (
    <>
      <Col span={8}>
        <Row justify='end'>
          <Col>
            <Row>
              <Button className='exchBtn' onClick={() => {
                action(BTC_THB, 'api')
                navi(basePath + '/BTC_THB')
              }}>
                BTC
              </Button>
            </Row>
            <Row>
              <Button className='exchBtn' onClick={() => {
                action(USDT_THB, 'api')
                navi(basePath + '/USDT_THB')
              }}>
                USDT_THB
              </Button>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={16}>
        {data.lastPrice}
        {data.volume}
        {data.symbol}
      </Col>
    </>
  )
}
export default CPM