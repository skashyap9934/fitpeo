import { Layout } from 'antd';
import CalendarView from './CalendarView';
import { DashboardOverview } from './DashboardOverview';
import UpcomingSchedule from './UpcomingSchedule';
const { Content, Sider } = Layout;

const DashboardMainContent = ({ collapsed }) => {
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      {!collapsed && <Sider width={0} />}
      <Content>
        <DashboardOverview />
      </Content>
      <Content style={{ backgroundColor: '#F6FAFF' }}>
        <CalendarView />
        <UpcomingSchedule />
      </Content>
    </Layout>
  );
};

export default DashboardMainContent;
