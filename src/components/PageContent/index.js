import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';

import PageToast from "../PageToast";
import NavBar from '../NavBar';

const { Content, Footer } = Layout;

export default function PageContent({ children }) {

  return (
    <>
    <PageToast />
    <Layout className="layout">
      <NavBar />
      <Content
        style={{ minHeight: '100vh' }}
      >
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          width: '100%',
          bottom: '0px',
          marginTop: '1px',
        }}
      >
        Produzido por Raiany Rufino<CopyrightOutlined /> 
      </Footer>
    </Layout>
  </>
  );
}

PageContent.propTypes = {
  children: PropTypes.element,
};
