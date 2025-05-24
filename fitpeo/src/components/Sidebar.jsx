import {
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  HistoryOutlined,
  MessageOutlined,
  PhoneOutlined,
  PlusSquareOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import DashboardMainContent from './DashboardMainContent';
const { Sider, Content } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      type: 'group',
      label: 'General',
      key: 'general',
      children: [
        {
          key: 'dashboard',
          icon: <AppstoreOutlined />,
          label: 'Dashboard',
        },
        {
          key: 'history',
          icon: <HistoryOutlined />,
          label: 'History',
        },
        {
          key: 'calendar',
          icon: <CalendarOutlined />,
          label: 'Calendar',
        },
        {
          key: 'appointments',
          icon: <PlusSquareOutlined />,
          label: 'Appointments',
        },
        {
          key: 'statistics',
          icon: <BarChartOutlined />,
          label: 'Statistics',
        },
      ],
    },
    {
      type: 'group',
      label: 'Tools',
      key: 'tools',
      children: [
        {
          key: 'chat',
          icon: <MessageOutlined />,
          label: 'Chat',
        },
        {
          key: 'support',
          icon: <PhoneOutlined />,
          label: 'Support',
        },
      ],
    },
    {
      type: 'group',
      label: '',
      key: 'settings',
      children: [
        {
          key: 'setting',
          icon: <SettingOutlined />,
          label: 'Setting',
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          breakpoint="md"
          onBreakpoint={(broken) => setCollapsed(broken)}
          width={256}
          style={{ backgroundColor: '#F6FAFF' }}
        >
          <Menu
            mode="inline"
            style={{
              backgroundColor: '#F6FAFF',
            }}
            items={items}
          />
        </Sider>

        <Content style={{ backgroundColor: 'white' }}>
          <DashboardMainContent collapsed={collapsed} />
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default Sidebar;
