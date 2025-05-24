import { Col, Dropdown, Row, Space, Typography } from 'antd';
import { GiHeartBeats, GiLungs, GiNoseFront } from 'react-icons/gi';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import { DownOutlined } from '@ant-design/icons';

const fontFamily = 'Poppins';

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
    <>
      <Row
        gutter={[16, 16]}
        justify={'space-between'}
        style={{ paddingInline: 11 }}
      >
        <Col>
          <Typography.Title level={4} style={{ color: 'navy', fontFamily }}>
            Dashboard
          </Typography.Title>
        </Col>

        <Col>
          <Space size={'small'}>
            <Typography.Text style={{ color: 'navy', fontFamily }}>
              This Week
            </Typography.Text>

            <Dropdown menu={{ items: dropdownItems }}>
              <DownOutlined style={{ cursor: 'pointer' }} />
            </Dropdown>
          </Space>
        </Col>
      </Row>

      <Row
        gutter={[16, 16]}
        style={{ paddingInline: 11, border: '2px solid red', width:'100%' }}
        justify={'space-around'}

      >
        <AnatomySection />
        <HealthStatusCards />
      </Row>
    </>
  );
};
