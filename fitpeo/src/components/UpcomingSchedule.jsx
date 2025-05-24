import { Card, Col, Row } from 'antd';
import {
  scheduledAppointments,
  upcomingAppointmentsSaturday,
  upcomingAppointmentsThursday,
} from '../data/healthData';
import AllSchedules from './AllSchedules';
import { getIcon } from './GetIcon';
import ScheduleItem from './ScheduleItem';

const UpcomingSchedule = () => {
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

        <AllSchedules day={'Thursday'} items={upcomingAppointmentsThursday} />
        <AllSchedules day={'Saturday'} items={upcomingAppointmentsSaturday} />
      </Card>
    </div>
  );
};

export default UpcomingSchedule;
