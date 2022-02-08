import { Button, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router-dom';
import Exchange from './Exchange';

const Market = ({ children }) => {
  console.log('file: Market.js ~ line 8 ~ children', children)
  return (
    <>
      Market
    </>
  )
}

// Market.propTypes = {
//   value: PropTypes.string.isRequired,
//   handleClick: PropTypes.func.isRequired
// }

export default Market;
