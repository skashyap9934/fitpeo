import { Space } from 'antd';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { monthNames } from '../data/healthData';

const date = new Date();

const CalendarView = () => {
  return (
    <div style={{ paddingInline: 15 }}>
      <Space size={'middle'} direction="vertical">
        <div style={{ color: '#000080', fontWeight: 'bold' }}>
          {monthNames[date.getMonth()]} {date.getFullYear()}
        </div>

        <Calendar style={{ border: '1px solid red' }} />
      </Space>
    </div>
  );
};

export default CalendarView;
