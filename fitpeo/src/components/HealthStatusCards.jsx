import { Col, Progress } from 'antd';
import StatusCard from './StatusCard';
import { GiLungs, GiTooth } from 'react-icons/gi';
import { FaBone } from 'react-icons/fa';
import { organDetails } from '../data/healthData.js';

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
    <Col span={12}>
      {organDetails.map((item) => (
        <StatusCard
          key={item.key}
          value={item.name}
          prefix={getPrefixItem(item.prefix)}
          progress={<Progress percent={30} status="active" />}
        >
          <Progress percent={item.progress} strokeColor={item.flag} />
        </StatusCard>
      ))}
    </Col>
  );
};

export default HealthStatusCards;
