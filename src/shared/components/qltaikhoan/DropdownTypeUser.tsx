import React from 'react';
import { Select } from 'antd';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const App: React.FC = () => (
  <Select
    showSearch
    placeholder="Tất cả loại người dùng"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: 'Tất cả loại người dùng',
        label: 'Tất cả loại người dùng',
      },
      {
        value: 'Chủ khách sạn',
        label: 'Chủ khách sạn',
      },
      {
        value: 'Khách hàng',
        label: 'Khách hàng',
      },
    ]}
  />
);

export default App;