import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import IcAvatar from '../icons/header-icons/IcAvatar';
import IcProfile from '../icons/header-icons/IcProfile';
import IcContact from '../icons/header-icons/IcContact';
import IcSetting from '../icons/header-icons/IcSetting';
import IcLogout from '../icons/header-icons/IcLogout';
const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);
  
    // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }: MouseEvent) => {
        if (!dropdown.current) return;
        if (
          !dropdownOpen ||
          dropdown.current.contains(target) ||
          trigger.current.contains(target)
        )
          return;
        setDropdownOpen(false);
      };
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    });
  
    // close if the esc key is pressed
    useEffect(() => {
      const keyHandler = ({ keyCode }: KeyboardEvent) => {
        if (!dropdownOpen || keyCode !== 27) return;
        setDropdownOpen(false);
      };
      document.addEventListener('keydown', keyHandler);
      return () => document.removeEventListener('keydown', keyHandler);
    });
  
    return (
      <div className="relative">
        <Link
          ref={trigger}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-6"
          to="#"
        >
          <span className=" text-right lg:block">
            <span className="block text-sm font-medium text-black">
              Nguyễn Thị Thu Thuyên
            </span>
            <span className="block text-xs">ADMIN</span>
          </span>
          <span className="h-12 w-12 rounded-full">
            <IcAvatar />
          </span>
        </Link>
  
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
            dropdownOpen === true ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <IcProfile/>
                Thông tin cá nhân
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <IcContact/>
                Liên hệ
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <IcSetting/>
              Cài đặt tài khoản
              </Link>
            </li>
          </ul>
          <button className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            <IcLogout/>
          Đăng xuất
          </button>
        </div>
      </div>
    );
  };
  
  export default DropdownUser;