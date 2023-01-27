import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { useGetFlightsQuery } from '../services/flightApi';
import { Option } from '../models/flight.model';
import Form from 'antd/es/form/Form';
import { searchActions } from '../store/searchBy';
import { useDispatch } from 'react-redux';

const Searching: React.FC = () => {
 const dispatch=useDispatch()

  const { data, isSuccess } = useGetFlightsQuery();


  let arr: Option[] = [];
  let cmarr: string[] = []

  if (data !== undefined) {
    data.forEach((el, i) => {
      let str: string = el.rocket.rocket_name
      if (!cmarr.includes(str)) {
        cmarr.push(str)
        arr.push({ value: str, label: str })
      }

    })
  }



const onSearch=(value:string)=>{
  dispatch(searchActions.storeSearch(value))
}
  return (

        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: 400 }}
          options={arr}
          filterOption={true}
          className="shadow"
        >
          <Input.Search size="large" placeholder="Search here by rocket name ..." enterButton onSearch={onSearch}/>
        </AutoComplete>

  );
};

export default Searching;
