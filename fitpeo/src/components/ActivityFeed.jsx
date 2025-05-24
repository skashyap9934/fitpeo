import { Card, Col, Row } from 'antd';
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import { chartData } from '../data/healthData';

const colors = {
  a: 'blue',
  b: 'green',
  c: 'orange',
};

const ActivityFeed = () => {
  return (
    <Card
      title={
        <Row justify={'space-between'}>
          <Col>Activity</Col>
          <Col>3 appointments on this week</Col>
        </Row>
      }
      size="small"
      style={{ backgroundColor: '#F6FAFF' }}
    >
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={chartData}>
          <XAxis dataKey="day" />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Bar dataKey="a" barSize={7}>
            {chartData.map((_, index) => (
              <Cell key={`a-${index}`} fill={colors.a} />
            ))}
          </Bar>

          <Bar dataKey="b" barSize={7}>
            {chartData.map((_, index) => (
              <Cell key={`b-${index}`} fill={colors.b} />
            ))}
          </Bar>

          <Bar dataKey="c" barSize={7}>
            {chartData.map((_, index) => (
              <Cell key={`c-${index}`} fill={colors.c} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ActivityFeed;
