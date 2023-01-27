import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { useGetFlightsQuery } from '../services/flightApi';
import { Option } from '../models/flight.model';



const Searching: React.FC = () => {
  const { data, isSuccess } = useGetFlightsQuery();
  let arr: Option[] = [];
  let cmarr:string[]=[]
  if (data !== undefined) {
    data.forEach((el, i) => {
      let str: string = el.rocket.rocket_name
      if(!cmarr.includes(str)){
        cmarr.push(str)
        arr.push({ value: str, label: str })
      }

    })
  }
  console.log(arr)


  const options = [
    {
      label: "hi",
      value: "hi"
    }
  ]


  const handleSearch = (value: string) => {
    // setOptions(value ? searchResult(value) : []);
    console.log(value)
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 300 }}
      options={arr}
      onSelect={onSelect}
      onSearch={handleSearch}
      filterOption={true}
      className="shadow"
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default Searching;
