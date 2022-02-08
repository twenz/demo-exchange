import { Layout } from 'antd';
import React from 'react';

const MainLayout = ({ children }) => {
// console.log('file: MainLayout.js ~ line 5 ~ children', children)
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
