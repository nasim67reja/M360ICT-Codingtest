import React, { useState } from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useGetFlightsQuery } from '../services/flightApi';
import { Flight } from '../models/flight.model';


// const PaginationC: React.FC = () => <Pagination onChange={onChange} total={50} />;
const PaginationC = () => {
    const[page,setPage]=useState<number>(1);
    const[size,setSize]=useState<number>(10);


  const { data, error, isLoading, isSuccess } = useGetFlightsQuery()
  // if (isSuccess)
  //   console.log(data.length);




  return <>
    <div>
      {
        isSuccess && (
          <div>
            {
              data.slice((page-1)*size,(size*page)).map((flight, i) => {
                return <div key={i}>
                  {flight.launch_failure_details ? flight.launch_failure_details.reason : "success"}
                </div>
              })
            }
            <Pagination total={data.length} pageSize={size} current={page} onChange={(page)=>setPage(page)} onShowSizeChange={(current:number,size:number)=>{
              setSize(size);
              // console.log(current,size)
            }}/>
          </div>
        )
      }
    </div>
  </>
}

export default PaginationC;