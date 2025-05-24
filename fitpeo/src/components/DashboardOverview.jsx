import { DownOutlined } from '@ant-design/icons';
import { Col, Dropdown, Row, Space, Typography } from 'antd';
import { GiHeartBeats, GiLungs, GiNoseFront } from 'react-icons/gi';
import ActivityFeed from './ActivityFeed';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

const dropdownItems = [
  {
    key: '1',
    label: 'Heart',
    extra: <GiHeartBeats />,
  },
  {
    key: '2',
    label: 'Lungs',
    extra: <GiLungs />,
  },
  {
    key: '3',
    label: 'Nose',
    extra: <GiNoseFront />,
  },
];

export const DashboardOverview = () => {
  return (
    <div style={{ paddingInline: 11 }}>
      <Row gutter={[16, 16]} justify={'space-between'}>
        <Col>
          <Typography.Title
            level={4}
            style={{ color: 'navy', fontFamily: 'Poppins' }}
          >
            Dashboard
          </Typography.Title>
        </Col>

        <Col>
          <Space size={'small'}>
            <div style={{ color: 'navy' }}>This Week</div>

            <Dropdown menu={{ items: dropdownItems }}>
              <DownOutlined style={{ cursor: 'pointer' }} />
            </Dropdown>
          </Space>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify={'space-around'}>
        <AnatomySection />
        <HealthStatusCards />
      </Row>

      <Row>
        <Col span={24}>
          <ActivityFeed />
        </Col>
      </Row>
    </div>
  );
};
