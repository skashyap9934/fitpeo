import {
  Button,
  Card,
  Col,
  Grid,
  Input,
  Layout,
  Row,
  Space,
  Typography,
} from 'antd';
const { Sider, Content } = Layout;
const { useBreakpoint } = Grid;
import { BellFilled, SearchOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { GiPanda } from 'react-icons/gi';
import { MdAdd } from 'react-icons/md';

const Header = () => {
  const screens = useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(!screens.md);
  }, [screens]);

  return (
    <Layout
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        overflow: 'hidden',
        paddingInline: 15,
      }}
    >
      <Sider
        style={{
          backgroundColor: '#F6FAFF',
          paddingBlock: 15,
        }}
        width={collapsed ? 'max-content' : 241}
      >
        <Typography.Title level={4} style={{ margin: 0 }}>
          <span style={{ color: '#39CFD8' }}>Health</span>
          <span style={{ color: '#150F41' }}>care.</span>
        </Typography.Title>
      </Sider>

      <Content
        style={{
          margin: 'auto',
          paddingBlock: 15,
          backgroundColor: 'white',
          display: collapsed ? 'none' : 'block',
        }}
      >
        <Row gutter={[16, 16]} style={{ margin: 'auto', alignItems: 'center' }}>
          <Col span={20}>
            <Input
              size="large"
              placeholder="Search"
              addonBefore={<SearchOutlined />}
            />
          </Col>

          <Col span={4}>
            <Button icon={<BellFilled />} />
          </Col>
        </Row>
      </Content>

      <Content
        style={{
          margin: 'auto',
          backgroundColor: '#F6FAFF',
          paddingBlock: 15,
        }}
      >
        <Row gutter={[16, 16]} justify={'end'}>
          <Col>
            <Button variant="solid" color="green" icon={<GiPanda />} />
          </Col>

          <Col>
            <Button variant="solid" color="blue" icon={<MdAdd />} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Header;
