import styles from './Cancel2Container.module.scss';
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import IcBed from '../../components/icons/cancelbooking-icons/IcBed';

const invoice = [
  {
    id: 1,

  }
]
const Cancel2Container = () => {
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
  const charged = false;
  return (
    <div className={styles['content']}>
      <Row>
        <Col flex="1 1 500px">
          <Link to="/cancel/1" className='flex text-green-600 font-semibold'>
            <LeftOutlined />
            <h2 className='ml-2'>Quay lại trước đó</h2>
          </Link>
          <h1 className='text-2xl font-bold pt-2 pb-2'>Xác nhận hủy</h1>
          <h3>Bạn sắp hủy toàn bộ đặt phòng của mình. Vui lòng xem lại thông tin bên dưới trước khi hủy.</h3>
          <div className='mt-6 flex '>
            <IcBed/>
            <div>
              <div className='ml-2 mb-3'>
                <h3 className='font-bold'>(1x) Superior Room With King Size Bed</h3>
                <div className='flex'>
                  <h3 className='mr-2'>635,878 VND</h3>
                  <h3>- 2 người lớn</h3>
                </div>
              </div>
              <div className='ml-2 mb-3'>
                <h3 className='font-bold'>(1x) Superior Room With King Size Bed</h3>
                <div className='flex'>
                  <h3 className='mr-2'>635,878 VND</h3>
                  <h3>- 2 người lớn</h3>
                </div>
              </div>
              {charged ? (
                <h2 className='mb-3 ml-2 text-red-600 font-semibold'>Hủy mất phí</h2>
              ):(
                <h2 className='mb-3 ml-2 text-green-600 font-semibold'>Hủy miễn phí</h2>
              )
              }
            </div>
          </div>
          <div className='border-t border-b pt-5 pb-5'>
            <h1 className='text-2xl font-bold mb-4'>Chi tiết giá</h1>
            <div className='flex ml-10 text-lg mb-3'>
              <h3>Đặt phòng của bạn</h3>
              <h3>......VND</h3>
            </div>
            <div className='flex ml-10 text-lg mb-3'>
              <h3>Phí hủy</h3>
              <h3>......VND</h3>
            </div>
            <div className='flex ml-10 text-lg font-bold'>
              <h3>Số tiền bạn sẽ trả</h3>
              <h3>......VND</h3>
            </div>
          </div>
          {charged ? (
                <h2 className='mt-3 mb-3 ml-10 text-red-600 font-semibold text-base'>Tiền hoàn lại là 0 VND</h2>
              ):(
                <h2 className='mt-3 mb-3 ml-10 text-green-600 font-semibold text-base'>Số tiền...... VND sẽ được hoàn vào tài khoản của bạn.</h2>
              )
              }
          <div className="flex gap-2 mt-6 text-lg">
            <button
              className="flex justify-center rounded bg-red-600 border py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark"
              type="button"
              // onClick={''}
            >
              {charged ? (
                <Link to={'/cancel/4'}> Xác nhận hủy</Link> // có phí
              ):(
                <Link to={'/cancel/3'}> Xác nhận hủy</Link> // miễn phí
              )
              }
            </button>
            <button
              className="flex justify-center rounded bg-sky-100 border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark"
              type="button"
              // onClick={''}
            >
              Tôi muốn giữ đặt phòng này
            </button>
          </div>
        </Col>
        <Col flex="1 1 200px" style={{ marginLeft: '50px' }}>
          <Box className='border mb-6'>
            <div className='flex m-3'>
              <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" alt="" className={`${styles.image}`}/>
              <div className='ml-3'>
                <h1 className='text-2xl font-bold'>Taian Hotel & Apartment</h1>
                <h1 className='mt-2 text-lg'>15 tháng 12 – 16 tháng 12</h1>
                <h1 className='text-lg'>1 phòng</h1>
              </div>
            </div>
            <Row className='m-4 text-xl border-t'>
              <Col flex={2}>
                <h2 className='text-lg mb-4 mt-2'>Đặt phòng của bạn</h2>
                <h2 className='text-lg mb-4'>Phí hủy</h2>
                <h2 className='text-lg font-bold'>Số tiền bạn sẽ trả</h2>
              </Col>
                <Col flex={3} className='text-right'>
                <h2 className='text-lg mb-4 mt-2'>...... VND</h2>
                <h2 className='text-lg mb-4'>...... VND</h2>
                <h2 className='text-lg font-bold '>...... VND</h2>
              </Col>
            </Row>
          </Box>
          <Box className='border p-3'>
            <h1 className='text-xl font-bold'>Chính sách hủy</h1>
            <h1 className='text-base mt-2'>Bạn có thể hủy miễn phí đến 1 ngày trước khi tới nhận phòng. Bạn sẽ phải trả toàn bộ tiền phòng nếu bạn hủy trong vòng 1 ngày trước khi tới nhận phòng. Nếu bạn vắng mặt, phí vắng mặt sẽ bằng với phí hủy.</h1>
          </Box>
        </Col>
      </Row>
    </div>
  );
}

export default Cancel2Container;
