import * as React from 'react';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Select, Space } from 'antd';

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

export default function option() {
   
  return (
    <div className='flex gap-4 mb-4'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem label="Từ ngày">
            <MobileDatePicker defaultValue={dayjs('2022-01-01')} />
          </DemoItem>
          <DemoItem label="Đến ngày">
            <MobileDatePicker defaultValue={dayjs('2022-12-31')} />
          </DemoItem>
        </LocalizationProvider>
        <div>
            <div className='text-sm font-semibold'>Lọc theo</div>
            <Select
            defaultValue="Ngày"
            style={{
                width: 120,
                height:55,
                marginTop: 9,
            }}
            onChange={handleChange}
            options={[
                {
                value: 'Ngày',
                label: 'Ngày',
                },
                {
                value: 'Tháng',
                label: 'Tháng',
                },
                {
                value: 'Năm',
                label: 'Năm',
                }
            ]}
            />
        </div>
      </div>
  );
}