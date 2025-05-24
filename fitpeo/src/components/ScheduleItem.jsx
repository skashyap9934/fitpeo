import { Card, Col, Row } from 'antd';

const fontFamily = 'Poppins';

const ScheduleItem = ({
  title,
  icon,
  backgroundColor,
  textColor: color = 'black',
  time,
  doctor = '',
}) => {
  return (
    <Card size="small" style={{ width: 'max-content', backgroundColor, color }}>
      <Row gutter={[16, 16]} justify={'space-between'}>
        <Col style={{ fontFamily }}>{title}</Col>
        <Col style={{ fontFamily }}>{icon}</Col>
      </Row>
      <div>{time}</div>
      <div>{doctor}</div>
    </Card>
  );
};

export default ScheduleItem;
