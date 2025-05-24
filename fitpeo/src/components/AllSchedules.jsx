import { Col, Row, Typography } from 'antd';
import { getIcon } from './GetIcon';
import ScheduleItem from './ScheduleItem';

const AllSchedules = ({ items, day }) => {
  return (
    <div style={{ marginBlockEnd: 11 }}>
      <Typography.Text type="secondary">
        <div>On {day}</div>
      </Typography.Text>

      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col key={item.key}>
            <ScheduleItem
              title={item.title}
              icon={getIcon(item.icon, item.iconColor)}
              backgroundColor={'#DBE3F9'}
              textColor={item.textColor}
              time={item.time}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllSchedules;
