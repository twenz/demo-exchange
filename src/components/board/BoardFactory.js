import { Button, Col, Row, Skeleton } from 'antd';
import React from 'react';
import { useAsync } from 'react-use';

const BoardFactory = ({ value, onSelect = () => { } }) => {
  console.log('file: BoardFactory.js ~ line 5 ~ value', value)
  const { value: data, loading, error } = useAsync(async () => {
    const _data = await value.getExchanges
    return _data
  }, [value])
  if (loading) return <Skeleton />
  if (error) return console.log('~~ error : ', error);
  return (
    <Row>
      <Col>
        <Button onClick={onSelect} >get it</Button>
      </Col>
      <Col style={{ width: 300, height: 300 }}>
        asd : {JSON.stringify(data)}
      </Col>
    </Row>
  )
};

// BoardFactory.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }

export default BoardFactory;
