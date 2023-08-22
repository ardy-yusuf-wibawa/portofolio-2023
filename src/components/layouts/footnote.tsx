import React from 'react'

export const FootNote = (): React.ReactElement => (
  <>
    <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
      © 2023{' '}
      <a
        href='/'
        className='hover:underline'>
        Ardy Yusuf™
      </a>
      . All Rights Reserved.
    </span>
  </>
)
