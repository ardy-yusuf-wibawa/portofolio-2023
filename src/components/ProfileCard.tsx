/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

const ProfileCard = (): React.ReactElement => {
  return (
    <div className='items-center justify-center self-center w-full max-w-sm'>
      <div className='pt-[50px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex flex-col items-center pb-10'>
          <img
            className='w-24 h-24 mb-3 rounded-full shadow-lg'
            src='./img/profilePicture.jpg'
            alt='Full Stack Developer'
          />
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            Ardy Yusuf
          </h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            Full Stack Developer
          </span>
          <div className='flex mt-4 space-x-3 md:mt-6'>
            <a
              href='#'
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg
             hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700
              dark:focus:ring-red-800'>
              Add friend
            </a>
            <a
              href='#'
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300
             rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white
             dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'>
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
