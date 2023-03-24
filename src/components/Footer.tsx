import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (): React.ReactElement => {
  return (
    <footer className='bg-white dark:bg-gray-900 w-[100%]'>
      <div className='mx-auto container p-4 sm:p-6'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'></div>
          <div className='hidden sm:block'>
            <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                  Resources
                </h2>
                <ul className='text-gray-600 dark:text-gray-400'>
                  <li className='mb-4'>
                    <a
                      href='https://react.dev/'
                      className='hover:underline'>
                      React
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://tailwindcss.com/'
                      className='hover:underline'>
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                  Follow us
                </h2>
                <ul className='text-gray-600 dark:text-gray-400'>
                  <li className='mb-4'>
                    <a
                      href='https://github.com/ArdyYusuf-AgriTech'
                      className='hover:underline '>
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://discord.com/channels/@me'
                      className='hover:underline'>
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                  Legal
                </h2>
                <ul className='text-gray-600 dark:text-gray-400'>
                  <li className='mb-4'>
                    <Link
                      to='#'
                      className='hover:underline'>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover:underline'>
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6 justify-center sm:justify-start border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between justify-center'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{' '}
            <a
              href='/'
              className='hover:underline'>
              Ardy Yusuf™
            </a>
            . All Rights Reserved.
          </span>
          <div className='flex mt-4 space-x-6 justify-center sm:justify-center sm:mt-0'>
            <Link
              to='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                className='w-5 h-5'
                fill='#ff2800'
                viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>
                Facebook page
              </span>
            </Link>
            <Link
              to='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#ff2800'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'>
                <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
              </svg>
              <span className='sr-only'>
                Instagram page
              </span>
            </Link>
            <Link
              to='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                className='w-5 h-5'
                fill='#ff2800'
                viewBox='0 0 24 24'>
                <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
              </svg>
              <span className='sr-only'>
                Twitter page
              </span>
            </Link>
            <Link
              to='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                className='w-5 h-5'
                fill='#ff2800'
                viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>
                GitHub account
              </span>
            </Link>
            <Link
              to='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                className=' w-5 h-5'
                fill='#ff2800'
                viewBox='0 0 1024 1024'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>
                Instagram
              </span>
            </Link>
            <Link
              to='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
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
              <span className='sr-only'>
                Instagram
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
