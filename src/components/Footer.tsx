import React from 'react'
import { FootNote } from './layouts/footnote'
import { SvgIcon } from './header/svg'
import { footListFollow, footListResources } from './layouts/constants'

const Footer = (): React.ReactElement => {
  return (
    <footer className='w-full'>
      <div className='p-4 sm:p-6'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'></div>
          <div className='collapse sm:visible'>
            <div className='grid gap-8 sm:grid-cols-2 sm:gap-6'>
              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                  Resources
                </h2>
                <ul className='text-gray-600 dark:text-gray-400'>
                  {footListResources.map((resource, index) => (
                    <li
                      className='mb-4'
                      key={index}>
                      <a
                        href={resource.path}
                        className='hover:underline'>
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                  Follow us
                </h2>
                <ul className='text-gray-600 dark:text-gray-400'>
                  {footListFollow.map((follow, index) => (
                    <li
                      key={index}
                      className='mb-4'>
                      <a
                        href={follow.path}
                        className='hover:underline '>
                        {follow.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6 justify-center border-gray-200 dark:border-gray-700 sm:mx-auto sm:justify-start lg:my-8' />
        <div className='justify-center sm:flex sm:items-center sm:justify-between'>
          <FootNote />
          <div className='mt-4 flex justify-center space-x-6 sm:mt-0 sm:justify-center'>
            <SvgIcon />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
