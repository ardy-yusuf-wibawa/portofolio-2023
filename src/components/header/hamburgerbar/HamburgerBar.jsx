import React, { useState, useEffect, useRef } from 'react'
import { MenuBar } from './Menubar'
import { FootNote } from '../../layouts/FootNote'
import { SvgIcon } from '../Svg'
import { Logo } from '../Logo'

const HamburgerBar = () => {
  const buttonRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event)=> {
      if (
        buttonRef.current != null &&
        'contains' in buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [buttonRef])

  const handleToggle = ()=> {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className='absolute right-[15px] visible lg:collapse '>
        <div>
          <button
            className='flex'
            onClick={handleToggle}
            ref={buttonRef}>
            <svg
              className='text-xl  '
              stroke='#ff2800'
              fill='#ff2800'
              strokeWidth='0'
              viewBox='0 0 1024 1024'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0
                            624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8
                            3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
            </svg>
          </button>
        </div>
        <div>
          <div className={`relative  ${isOpen ? '' : 'hidden'}`}>
            <div className='fixed inset-0 bg-slate-800 opacity-25'></div>
            <nav
              className='fixed top-0 left-0 bottom-0 z-[9999] flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white py-6 px-6
                        dark:bg-slate-800'>
              <div className='mb-8 flex items-center'>
                <Logo />
              </div>
              <MenuBar />
              <div className='mt-auto'>
                <div className='w-shrink my-auto flex flex-row items-center justify-between gap-1'>
                  <SvgIcon />
                </div>
                <p className='my-4 text-center text-xs text-gray-400'>
                  <FootNote />
                </p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HamburgerBar
