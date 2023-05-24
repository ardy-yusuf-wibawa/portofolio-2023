/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Link } from 'react-router-dom'
import HamburgerBar from './HamburgerBar'
import React from 'react'
import '@fontsource/source-sans-pro'
// header function
function Header(): React.ReactElement {
  return (
    <div className='fixed top-0 left-0 z-[50] mx-auto flex h-[100px] w-[100vw] flex-row items-center justify-between bg-white p-4 sm:p-6'>
      <div>
        <a
          href='/'
          className=' font-sansPro text-[30px] font-semibold sm:text-[40px] '>
          Ardy Yusuf
        </a>
      </div>
      <div className='relative left-8 hidden items-center justify-between pt-[40px] lg:block'>
        <div className='flex items-center justify-center gap-[10px]'>
          <Link
            to='/'
            className='border-red-500 hover:border-b-[3px]'>
            Home
          </Link>
          <Link
            to='/about'
            className='border-red-500 hover:border-b-[3px]'>
            About
          </Link>
          <Link
            to='/portofolio'
            className='border-red-500 hover:border-b-[3px]'>
            Portfolio
          </Link>
        </div>
      </div>
      <div className='w-shrink my-auto flex flex-row items-center justify-between gap-4'>
        <a
          href='https://wa.me/+628111299144'
          className='sm-only:text-sm hidden items-center justify-center rounded-full border-2 p-1 lg:block'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='#ff2800'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'>
            <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
          </svg>
        </a>

        <a
          href='https://www.linkedin.com'
          className='sm-only:text-sm hidden items-center justify-center rounded-full border-2 p-1 lg:block'>
          <svg
            stroke='#ff2800'
            fill='#ff2800'
            strokeWidth='0'
            viewBox='0 0 448 512'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
          </svg>
        </a>

        <a
          href='https://www.github.com'
          className='sm-only:text-sm hidden items-center justify-center rounded-full border-2 p-1 lg:block'>
          <svg
            className='h-5 w-5'
            fill='#ff2800'
            viewBox='0 0 24 24'>
            <path
              fillRule='evenodd'
              d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
              clipRule='evenodd'
            />
          </svg>
        </a>

        <a
          href='https://web.facebook.com'
          className='sm-only:text-sm hidden items-center justify-center rounded-full border-2 p-1 lg:block'>
          <svg
            stroke='#ff2800'
            fill='#ff2800'
            strokeWidth='0'
            viewBox='0 0 24 24'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22'></path>
          </svg>
        </a>

        <a
          href='https://www.instagram.com'
          className='sm-only:text-sm hidden items-center justify-center rounded-full border-2 p-1 lg:block'>
          <svg
            stroke='#ff2800'
            fill='#ff2800'
            strokeWidth='0'
            viewBox='0 0 1024 1024'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z'></path>
          </svg>
        </a>

        <a
          href='https://twitter.com'
          className='sm-only:text-sm hidden items-center justify-center rounded-full border-2 p-1 lg:block'>
          <svg
            stroke='#ff2800'
            fill='#ff2800'
            strokeWidth='2'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
          </svg>
        </a>
        <HamburgerBar />
      </div>
    </div>
  )
}

export default Header
