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
        <header className={`hidden md:flex ${styles['header']}`}>
            <Link
                to={'/'}
                className={`flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8 ${styles['logo-text']}`}>
                InnSight
            </Link>
            <nav className="contents text-base lg:text-lg mr-auto">
                <div className={`flex items-center justify-center`}>
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
                        <span>Ưu đãi</span>
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

            <div className="flex items-center px-4 lg:px-6 xl:px-8">
                <button class={`py-2 px-4 drop-shadow-md inline-flex items-center justify-between ${styles['header-button']}`}>
                    <IcAvatar />
                    <span>Đăng nhập</span>
                </button>
                <button class={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles['header-button']}`}>
                    <IcPencil />
                    <span>Đăng ký</span>
                </button>
            </div>
        </header>
    )
}

export default Navbar
