import { Button, Col, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

const Main = (props) => {
  // const store = useStore()
  // const action = (type, t) => store.dispatch({ type, t })
  // const counter = useSelector((state) => state)
  const nav = useNavigate()
  return (
    <Row justify='center' align='middle' style={{ height: '100%' }}>
      <Col>
        <Row justify='center'>Main Page</Row>
        <Button onClick={() => nav('market')}>Go Market</Button>
      </Col>
    </Row>
  )
}

export default Main