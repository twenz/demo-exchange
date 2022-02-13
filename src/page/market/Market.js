import { Button, Col, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

const Market = ({ children }) => {
  const nav = useNavigate()
  return (
    <Row justify='center' align='middle' style={{ height: '100%' }}>
      <Col>
        <Row justify='center'>Market</Row>
        <Button onClick={() => nav('All_Coin')}>Go Exchange</Button>
      </Col>
    </Row>
  )
}


export default Market;
