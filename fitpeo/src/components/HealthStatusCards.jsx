import { Button, Col, Progress, Row, Space } from 'antd';
import { FaArrowRight, FaBone } from 'react-icons/fa';
import { GiLungs, GiTooth } from 'react-icons/gi';
import { organDetails } from '../data/healthData.js';
import StatusCard from './StatusCard';

const HealthStatusCards = () => {
  const getPrefixItem = (prefix) => {
    switch (prefix) {
      case 'GiLungs':
        return <GiLungs color="red" />;
      case 'GiTooth':
        return <GiTooth color="#D1C6B5" />;
      case 'FaBone':
        return <FaBone color="#D1D3D5" />;
      default:
        return null;
    }
  };

  return (
    <Col xs={24} md={24} lg={8}>
      <Space
        direction="vertical"
        size={'middle'}
        style={{ width: '100%', height: '100%' }}
      >
        {organDetails.map((item) => (
          <StatusCard
            key={item.key}
            value={item.name}
            prefix={getPrefixItem(item.prefix)}
            progress={<Progress percent={30} status="active" />}
          >
            <div>Date: {item.date}</div>
            <Progress percent={item.progress} strokeColor={item.flag} />
          </StatusCard>
        ))}

        <Row justify={'end'}>
          <Button color="navy" variant="link">
            Details <FaArrowRight />
          </Button>
        </Row>
      </Space>
    </Col>
  );
};

export default HealthStatusCards;
