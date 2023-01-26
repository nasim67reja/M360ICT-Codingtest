import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';
import { Flight } from '../models/flight.model';

const { Meta } = Card;

const CardC: React.FC = (flight) => {
  const [loading, setLoading] = useState(false);
console.log(flight)
  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  return (
    <>
      {/* <Switch checked={!loading} onChange={onChange} /> */}

      <Card className='shadow'
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
          <p>Hello world</p>
        </Skeleton>
      </Card>
    </>
  );
};

export default CardC;