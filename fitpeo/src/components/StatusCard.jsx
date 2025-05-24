import { Card, Statistic } from 'antd';

const StatusCard = ({ prefix, value, children }) => {
  return (
    <Card size="small">
      <Statistic
        valueStyle={{ fontSize: 'medium', display: 'flex', gap: 3 }}
        value={value}
        prefix={prefix}
      />
      <div>{children}</div>
    </Card>
  );
};

export default StatusCard;
