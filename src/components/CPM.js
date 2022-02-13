import { Button, Card, Col, PageHeader, Row, Skeleton } from 'antd';
import { isEmpty } from 'lodash';
import React from 'react';
import { useSelector, useStore } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useAsync } from 'react-use';
import { BTC_THB, SEE_EXCHANGE, USDT_THB, BUSD_THB } from '../redux-saga/actions';

import '../style/styles.sass'


const basePath = '/market'
const CPM = () => {
  const param = useParams()
  console.log('file: CPM.js ~ line 14 ~ param', param)
  const nav = useNavigate()
  const store = useStore()
  const action = (type, service) => store.dispatch({ type, service })
  const value = useSelector((state) => state)
  const { value: data, loading, error } = useAsync(async () => {
    const _data = await value.exchange
    return _data
  }, [value])
  // if (loading) return <Skeleton />
  if (error) console.log('error', error);

  const initBtn = async (currency) => {
    let _value = await value.exchange
    if (!isEmpty(_value) && _value?.symbol.toUpperCase() === currency) return nav(basePath + `/${currency}`)
    action(SEE_EXCHANGE, currency)
    nav(basePath + `/${currency}`)
  }

  return (
    <>
      <Row>
    <PageHeader title='Back' onBack={() => nav(-1) } ></PageHeader>
      </Row>
      <Row justify='space-around' style={{ padding: '30px' }}>
        <Col xs={24} md={8}>
          <Row >
            <Col span={24}>
              <Row justify='center'>
                <Button className='exchBtn' onClick={() => initBtn(BTC_THB)}>
                  BTC_THB
                </Button>
                <Button className='exchBtn' onClick={() => initBtn(USDT_THB)}>
                  USDT_THB
                </Button>
                <Button className='exchBtn' onClick={() => initBtn(BUSD_THB)}>
                  BUSD_THB
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={16}>
          <Card title={param.exc || 'Select One'} style={{ width: '100%' }} extra={<a href="#">More</a>} >
            {
              loading ? <Skeleton />
                : (
                  <>
                    <p>{data?.lastPrice}</p>
                    <p>{data?.volume}</p>
                    <p>{data?.symbol}</p>
                    {!data?.symbol ? <p>Coming Soon</p> : ''}
                  </>
                )
            }
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default CPM