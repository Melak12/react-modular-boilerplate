import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { ReactElement } from 'react'
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';

type Props = {
    children:ReactElement
}

export default function MainLayout({children}: Props) {
    return (
        <Layout>
          <AppHeader />
          <Content className='min-h-[75vh]'>{ children }</Content>
          <AppFooter />
        </Layout>
      );
}