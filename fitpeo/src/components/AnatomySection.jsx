import { HeartFilled } from '@ant-design/icons';
import { Button, Card, Col } from 'antd';
import { GiLeg } from 'react-icons/gi';
import anatomy from '../assets/anatomy.jpg';

const AnatomySection = () => {
  return (
    <>
      <Col xs={24} md={24} lg={12}>
        <Card
          size="small"
          style={{
            margin: 'auto',
            width: 'max-content',
            backgroundColor: '#F6FAFF',
          }}
        >
          <img
            src={anatomy}
            height={301}
            alt="anatomy"
            style={{ paddingInline: 35 }}
          />
          <Button
            className="organ-details"
            style={{
              top: '25%',
              left: '60%',
              color: 'white',
              backgroundColor: '#3833b0',
            }}
            icon={<HeartFilled style={{ color: 'red' }} />}
          >
            Healthy Heart
          </Button>
        </Card>

        <Button
          className="organ-details"
          style={{
            bottom: '30%',
            right: '55%',
            color: 'black',
            backgroundColor: '#03E0F0',
          }}
          icon={<GiLeg />}
        >
          Healthy Leg
        </Button>
      </Col>
    </>
  );
};

export default AnatomySection;
