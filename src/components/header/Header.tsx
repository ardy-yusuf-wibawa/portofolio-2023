/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Link } from 'react-router-dom'
import HamburgerBar from './hamburgerbar/HamburgerBar'
import React from 'react'
import '@fontsource/source-sans-pro'
import { navList } from '../layouts/constants'
import { SvgIcon } from './svg'
import { Logo } from './logo'
// header function
function Header(): React.ReactElement {
  return (
    <div className='fixed top-0 left-0 z-[50] flex h-[100px] w-[100%] flex-row items-center justify-between p-4 sm:p-6'>
      <Logo />
      <div className='collapse relative left-8 items-center justify-between pt-[40px] lg:visible'>
        <div className='flex items-center justify-center gap-[10px]'>
          {navList.map((menu, index) => {
            return (
              <Link
                key={index}
                to={menu.path}
                className='delay-50 transition duration-300 ease-in border-b-[1px] border-transparent hover:border-red-500'>
                {menu.name}
              </Link>
            )
          })}
        </div>
      </div>
      <div className='collapse lg:visible'>
        <div className='w-shrink my-auto flex flex-row items-center justify-between gap-4'>
          <SvgIcon />
        </div>
      </div>
      <div className='block lg:hidden'>
        <HamburgerBar />
      </div>
    </div>
  )
}

export default Header
