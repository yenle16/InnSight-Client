import React from 'react'
import IcSearch from '../icons/admin-header-icons/IcSearch'
import DropdownUser from './DropdownUser.tsx';
const Header = () => {
  return (
    <header className="sticky top-0 flex w-full border bg-slate-300 drop-shadow-1 dark:bg-slate-300 dark:drop-shadow-none z-50">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">

        <div className=" sm:block">
          <form action="" method="POST">
            <div className="relative">
              <button className="absolute top-1/2 left-0 -translate-y-1/2">
                <IcSearch />
              </button>
              <input
                type="text"
                placeholder="Tìm kiếm ....."
                className="w-full bg-transparent pr-4 pl-9 focus:outline-none text-black"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <DropdownUser />
        </div>
      </div>
    </header>
  )
}

export default Header
