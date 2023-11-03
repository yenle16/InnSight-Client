import styles from './Cancel4Container.module.scss';
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { CheckOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import IcBed from '../../components/icons/cancelbooking-icons/IcBed';

const invoice = [
  {
    id: 1,

  }
]
const Cancel4Container = () => {
  const [selectedReason, setSelectedReason] = useState(); // Use useState inside the functional component

  const handleSelectChange = (value) => {
    setSelectedReason(value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSelectedReason(value);
  };

  const handleContinue = () => {
    
  };
  const charged = true;
  return (
    <div className={styles['content']}>
      <Link to="/" className="flex text-green-600 font-semibold text-base">
        <LeftOutlined className='mt-1'/>
        <h2 className="ml-2">Quay về tất cả đặt phòng</h2>
      </Link>
      <div className="mt-8 flex text-2xl">
        <h1>Đặt phòng của bạn</h1>
        {charged ? (
          <h1 className="text-red-600 font-semibold ml-1"> đã được hủy MẤT PHÍ</h1>
        ) : (
          <h1 className="text-green-600 font-semibold ml-1">đã được hủy MIỄN PHÍ</h1>
        )}
      </div>
      <div className="mb-3 ml-10 text-lg mt-4 mr-10">
        <div className="flex gap-3 mb-4">
          <CheckOutlined className="text-green-600 mt-1" />
          <h2>Chúng tôi sẽ gửi email thông báo hủy phòng tới </h2>
          <h2 className='font-bold'>email.......</h2>
        </div>
        <div className="flex gap-3 mb-4 justify-start">
          <CheckOutlined className="text-green-600 mt-1" />
          <h2 className='font-bold'>Đặt phòng của bạn đã được hủy thành công -</h2>
          <h2>bạn không cần phải làm gì nữa!</h2>
        </div>
        <div className="flex gap-3 mb-4">
          <CheckOutlined className="text-green-600 mt-1 mb-14" />
          <h2>
            Bạn có thể đã bị trừ tiền cho toàn bộ hoặc 1 phần đặt phòng bởi DaVue Hotel Da Nang - điều này hoàn toàn bình thường. Tiền hoàn lại thường mất 10 - 15 ngày làm việc.
          </h2>
        </div>
      </div>
      <div className='border bg-green-100 '>
        <Row className='m-4 text-xl'>
          <Col flex={2} className='ml-20'>
            <h2 className='text-lg mb-4'>Phí hủy đặt phòng:</h2>
            <h2 className='text-lg'>Số tiền hoàn:</h2>
          </Col>
          {charged ? (
            <Col flex={3} className='text-right mr-40'>
            <h2 className='text-lg mb-4 font-bold text-red-600'>...... VND</h2>
            <h2 className='text-lg font-bold text-green-600'>...... VND</h2>
            </Col>
          ):(
            <Col flex={3} className='text-right mr-40'>
            <h2 className='text-lg mb-4 font-bold text-green-600'>Miễn phí</h2>
            <h2 className='text-lg font-bold text-green-600'>........VND</h2>
            </Col>
          )}
        </Row>
      </div>
      <div className="flex gap-2 text-lg mt-5">
        <Link to="">
          <button className="flex justify-center rounded bg-sky-900 border py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark" type="button">
            Đặt lại
          </button>
        </Link>
        <Link to="/">
          <button className="flex justify-center rounded bg-sky-100 border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark" type="button">
            Tìm chỗ nghỉ khác
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Cancel4Container;
