import {
    FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined
  } from '@ant-design/icons';
  import { Button, Layout, Typography } from 'antd';
  import React from 'react';

type Props = {}

const { Footer } = Layout;
const { Text } = Typography;

function AppFooter({}: Props) {
  return (
    <Footer className='flex flex-col items-center justify-between md:flex-row px-2 md:px-12 lg:px-24'>
      <div className='flex flex-col items-center justify-center md:items-start md:justify-start'>
        <Text>{`©️ ${new Date().getFullYear()} ERC-20 Token. All rights reserved.`}</Text>

        <div>
          <Button type='link'>How to buy?</Button>
          <Button type='link'>Privacy and Policy</Button>
          <Button type='link'>Terms and Condition</Button>
        </div>
      </div>

      <div className='space-x-4 md:space-x-2'>
        <Button type='dashed' shape='circle' icon={<FacebookOutlined />} size='middle' />
        <Button type='dashed' shape='circle' icon={<InstagramOutlined />} size='middle' />
        <Button type='dashed' shape='circle' icon={<TwitterOutlined />} size='middle' />
        <Button type='dashed' shape='circle' icon={<YoutubeOutlined />} size='middle' />
      </div>
    </Footer>
  )
}

export default AppFooter