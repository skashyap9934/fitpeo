import { Card, Col, Row, Space, Typography } from 'antd';
import { FaUser } from 'react-icons/fa';
import { GiArm, GiTooth } from 'react-icons/gi';
import {
  scheduledAppointments,
  upcomingAppointmentsThursday,
} from '../data/healthData';
import ScheduleItem from './ScheduleItem';

const UpcomingSchedule = () => {
  const getIcon = (icon, iconColor) => {
    switch (icon) {
      case 'GiTooth':
        return <GiTooth color={iconColor} />;
      case 'GiArm':
        return <GiArm color={iconColor} />;
      case 'FaUser':
        return <FaUser color={iconColor} />;
      default:
        return;
    }
  };

  return (
    <div style={{ margin: 15 }}>
      <Row gutter={[16, 16]}>
        {scheduledAppointments.map((item) => (
          <Col key={item.key}>
            <ScheduleItem
              title={item.title}
              icon={getIcon(item.icon, item.iconColor)}
              backgroundColor={item.color}
              textColor={item.textColor}
              time={item.time}
              doctor={item.doctor}
            />
          </Col>
        ))}
      </Row>

      <Card size="small" style={{ marginTop: 5 }}>
        <div>
          <strong>The Upcoming Schedule</strong>
        </div>

        <div>
          <Typography.Text type="secondary">
            <div>On Thursday</div>
          </Typography.Text>

          <Row gutter={[16, 16]}>
            {upcomingAppointmentsThursday.map((item) => (
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
      </Card>
    </div>
  );
};

export default UpcomingSchedule;
