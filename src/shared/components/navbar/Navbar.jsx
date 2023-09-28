import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import IcHotel from '../icons/header-icons/IcHotel'
import IcSell from '../icons/header-icons/IcSell'
import IcGroup from '../icons/header-icons/IcGroup'
import IcAvatar from '../icons/header-icons/IcAvatar'
import IcPencil from '../icons/header-icons/IcPencil'
const Navbar = () => {
    return (
        <div className={`hidden lg:flex  ${styles['navbar']}`}>
            <Link
                to={'/'}
                className={`flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8 ${styles['logo-text']}`}>
                InnSight
            </Link>
            <nav className="contents text-base md:text-sm lg:text-lg mr-auto">
                <div className={`flex items-center justify-center md:text-xs lg:text-lg`}>
                    {/* <li className=""> */}
                    <Link
                        className={`${styles['nav-item']}`}
                        to={'/home'}>
                        <IcHotel />
                        <span>Lưu trú</span>
                    </Link>
                    {/* </li> */}
                    {/* <li className="p-3 xl:p-"> */}
                    <Link
                        className={`${styles['nav-item']}`}
                        to={'/home'}>
                        <IcSell />
                        <span className>Ưu đãi</span>
                    </Link>
                    {/* </li> */}
                    {/* <li className="p-3 xl:p-6"> */}
                    <Link
                        className={`${styles['nav-item']}`}
                        to={'/home'}>
                        <IcGroup />
                        <span>Hợp tác với chúng tôi</span>
                    </Link>
                    {/* </li> */}
                </div>
            </nav>

            <div className="flex items-center md:px-4 lg:px-6 xl:px-8">
                <button className={`py-2 px-4 drop-shadow-md inline-flex items-center justify-between ${styles['navbar-button']}`}>
                    <IcAvatar />
                    <span>Đăng nhập</span>
                </button>
                <button className={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles['navbar-button']}`}>
                    <IcPencil />
                    <span>Đăng ký</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar
