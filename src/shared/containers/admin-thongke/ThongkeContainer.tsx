import React, { useState } from 'react';
import Selectmenu from '../../components/admin-thongke/option'
import RevenueDate from '../../components/admin-thongke/RevenueDate'
import RevenueMonth from '../../components/admin-thongke/RevenueMonth'
import RevenueYear from '../../components/admin-thongke/RevenueYear';



const ThongkeContainer: React.FC = () => {
  const [revenueDate, setRevenueDate] = React.useState([
    {id:'1', amount:'300000', date:'17-01-2021'},
    {id:'2', amount:'800000', date:'1-05-2022'},
    {id:'3', amount:'100000', date:'14-06-2022'},
    {id:'4', amount:'1200000', date:'11-06-2022'},
    {id:'5', amount:'1300000', date:'12-07-2022'},
    {id:'6', amount:'500000', date:'14-07-2022'},
    {id:'6', amount:'800000', date:'2-10-2022'},
    {id:'6', amount:'700000', date:'5-10-2022'},
    {id:'7', amount:'1000000', date:'10-10-2022'},
    {id:'1', amount:'300000', date:'17-05-2023'},
    {id:'2', amount:'800000', date:'1-05-2023'},
    {id:'3', amount:'100000', date:'1-06-2023'},
    {id:'4', amount:'1200000', date:'2-06-2023'},
    {id:'5', amount:'1300000', date:'12-07-2023'},
    {id:'6', amount:'500000', date:'14-07-2023'},
    {id:'6', amount:'800000', date:'2-10-2023'},
    {id:'6', amount:'700000', date:'5-10-2023'},
    {id:'7', amount:'1000000', date:'10-10-2023'},
  ]);
  const [revenueMonth, setRevenueMonth] = React.useState([
    {id:'1', amount:'300000', month:'01', year:'2022'},
    {id:'2', amount:'800000', month:'02', year:'2022'},
    {id:'3', amount:'100000', month:'03', year:'2022'},
    {id:'4', amount:'1200000', month:'04', year:'2022'},
    {id:'5', amount:'1300000', month:'05', year:'2022'},
    {id:'6', amount:'500000', month:'06', year:'2022'},
    {id:'6', amount:'800000', month:'07', year:'2022'},
    {id:'6', amount:'700000', month:'08', year:'2022'},
    {id:'7', amount:'1000000', month:'09', year:'2022'},
    {id:'4', amount:'1200000', month:'10', year:'2022'},
    {id:'5', amount:'1300000', month:'11', year:'2022'},
    {id:'6', amount:'500000', month:'12', year:'2022'},
    {id:'1', amount:'300000', month:'01', year:'2023'},
    {id:'2', amount:'800000', month:'02', year:'2023'},
    {id:'3', amount:'100000', month:'03', year:'2023'},
    {id:'4', amount:'1200000', month:'04', year:'2023'},
    {id:'5', amount:'1300000', month:'05', year:'2023'},
    {id:'6', amount:'500000', month:'08', year:'2023'},
    {id:'6', amount:'800000', month:'10', year:'2023'},
    {id:'6', amount:'700000', month:'11', year:'2023'},
    {id:'7', amount:'1000000', month:'12', year:'2023'},
  ]);

  const [revenueYear, setRevenueYear] = React.useState([
    {id:'1', amount:'500000', year:'2017'},
    {id:'1', amount:'140000', year:'2018'},
    {id:'1', amount:'700000', year:'2019'},
    {id:'1', amount:'300000', year:'2020'},
    {id:'1', amount:'800000', year:'2021'},
    {id:'1', amount:'300000', year:'2022'},
    {id:'1', amount:'2100000', year:'2023'},
  ]);

  return (
    <>
      {/* <Selectmenu/> */}
      <RevenueDate revenue = {revenueDate}/>
      <RevenueMonth revenue = {revenueMonth}/>
      <RevenueYear revenue = {revenueYear}/>
      
      <div className="mt-6 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="flex border-b">
          <h4 className="mb-6 text-sm font-semibold text-black top-1">
            Thống kê chi tiết
          </h4>
          <div className="ml-7">
            {/* <DropdownTypeUser/> */}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-4 rounded-sm bg-cyan-900 ">
            <div className="p-2.5 xl:p-5">
              <h5 className=" text-sm font-medium uppercase xsm:text-base text-white">
                Mã KH
              </h5>
            </div>
            <div className="p-2.5  xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base text-white">
                Tên người dùng
              </h5>
            </div>
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base text-white">
                Vai trò
              </h5>
            </div>
            <div className="hidden items-center p-2.5 sm:block xl:p-5">
              <h5 className="text-sm  font-medium uppercase xsm:text-base text-white">
                Hành động
              </h5>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ThongkeContainer;
// const [series, setSeries] = useState([]);
