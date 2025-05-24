import { Layout } from 'antd';
import { DashboardOverview } from './DashboardOverview';
const { Content, Sider } = Layout;

const DashboardMainContent = () => {
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Sider width={0} />
      <Content>
        <DashboardOverview />
      </Content>
      <Content style={{ border: '1px solid blue', backgroundColor: '#F6FAFF' }}>
        Two
      </Content>
    </Layout>
  );
};

export default DashboardMainContent;
