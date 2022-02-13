import { Layout, Row } from 'antd';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Header>
        <Row justify='center' style={{ color: 'white', fontSize: '24px' }}>
          Header
        </Row>
      </Layout.Header>
      <Layout.Content style={{ height: '100%' }}>
        {children}
      </Layout.Content>
    </Layout>
  )
};

export default MainLayout;
