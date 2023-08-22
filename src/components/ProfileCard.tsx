/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

const ProfileCard = (): React.ReactElement => {
  return (
    <div className='w-full max-w-sm items-center justify-center self-center'>
      <div className='rounded-lg border border-gray-200 bg-white pt-[50px] shadow dark:border-gray-700 dark:bg-gray-800'>
        <div className='flex flex-col items-center pb-10'>
          <img
            className='mb-3 h-24 w-24 rounded-full shadow-lg'
            src='./img/profilePicture.jpg'
            alt='Full Stack Developer'
          />
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>Ardy Yusuf</h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>Full Stack Developer</span>
          <div className='mt-4 flex space-x-3 md:mt-6'>
            <a
              href='#'
              className='inline-flex items-center rounded-lg bg-red-700 px-4 py-2 text-center text-sm font-medium text-white
             hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700
              dark:focus:ring-red-800'>
              Add friend
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
