import { Button, Col, Row } from 'antd';
import React from 'react';
import {
  useParams,
  useLocation,
  useNavigate
} from 'react-router-dom';
import CPM from '../../components/CPM';

const Exchange = (props) => {
// console.log('file: Exchange.js ~ line 11 ~ props', props)
//   const param = useLocation()
  // console.log('file: Exchange.js ~ line 8 ~ param', param)
  return (
    <Row>
      Exc
      {/* <Col>
        <Row>
          <Button>
            BTC
          </Button>
        </Row>
        <Row>
          <Button>
            ETH
          </Button>
        </Row>
      </Col>
      <Col>
        {simbol}
      </Col> */}
      <CPM />
    </Row>
  )
}
export default Exchange