import { Layout } from 'antd';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Layout.Header>
        Header
      </Layout.Header>
      <Layout.Content>
        {children}
      </Layout.Content>
    </Layout>
  )
};

export default MainLayout;
