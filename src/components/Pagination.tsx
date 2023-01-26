import React, { useState } from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useGetFlightsQuery } from '../services/flightApi';
import { Flight } from '../models/flight.model';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';


// const PaginationC: React.FC = () => <Pagination onChange={onChange} total={50} />;

const { Meta } = Card;


const PaginationC = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [loading, setLoading] = useState(false);
  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  const { data, error, isLoading, isSuccess } = useGetFlightsQuery()
  // if (isSuccess)
  //   console.log(data.length);


console.log(data)

  return <>
    <div>
      {
        isSuccess && (
          <div>
            <div className='grid grid-4-cols gap-2'>
              {
                data.slice((page - 1) * size, (size * page)).map((flight, i) =>
                  <Card key={i} className='shadow'
                  hoverable
                  cover={<img alt="example" src={flight.links.mission_patch_small}/>}
                    style={{padding:"1rem", width: 280, }}
                    // actions={[
                    //   <SettingOutlined key="setting" />,
                    //   <EditOutlined key="edit" />,
                    //   <EllipsisOutlined key="ellipsis" />,
                    // ]}
                  >
                    
                    <Skeleton loading={loading} avatar active>
                      <Meta
                        avatar={<Avatar src={flight.links.mission_patch_small} />}
                        title={flight.mission_name}
                        description="This is the description"
                      />
                      <p>Hello world</p>
                    </Skeleton>
                  </Card>
                )
              }
            </div>
            <Pagination total={data.length} pageSize={size} current={page} onChange={(page) => setPage(page)} onShowSizeChange={(current: number, size: number) => {
              setSize(size);
              // console.log(current,size)
            }} />
          </div>
        )
      }
    </div>
  </>
}

export default PaginationC;