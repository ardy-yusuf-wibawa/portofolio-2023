import React from 'react'
import { Carousel } from 'flowbite-react'
import { Link } from 'react-router-dom'

const HeroImg = (): React.ReactElement => {
  return (
    <div className='flex relative justify-between sm:pt-[100px] sm:pb-0 py-[30px]'>
      <div className=' container mx-auto lg:w-[90%] px-4 w-full flex justify-between'>
        <div className='sm:w-[56%] sm:pt-[30px] w-full'>
          {/* <!--Main Narrative--> */}
          <h1 className='text-center sm:text-start sm:text-6xl font-bold sm:mb-5 sm:leading-[70px] text-[16px] mb-2.5 leading-[1.5] text-red-500 sm:pt-0 pt-20 '>
            I am Ardy Yusuf<br></br>
            <span
              className='text-red-700'
              id='word'>
              Full Stack
            </span>
            <br></br>
            <span className='text-rose-900'>
              Developer
            </span>
            <br></br>
          </h1>
          {/* <!--Hot Button--> */}
          <Link
            className='relative flex items-center justify-center
            rounded-lg font-medium hover:shadow-[0_12px_32px_0px_rgba(128,0,0,0.7)]
            text-white bg-rose-700 transition-all hover:scale-125 sm:py-[12px] sm:px-[26px] py-2 px-2 text-xs
            sm:text-sm lg:text-base sm:w-2/4 sm:mx-0 w-[90%] mx-auto'
            to='/portofolio'>
            {' '}
            sneak a peek
          </Link>
          {/* <!--Photo--> */}
        </div>
        <div className='md:block w-[74%] pt-[10px] hidden'>
          <Carousel>
            <img
              src='./img/html.jpg'
              alt='...'
            />
            <img
              src='./img/css.jpg'
              alt='...'
            />
            <img
              src='./img/tailwind.jpg'
              alt='...'
            />
            <img
              src='./img/React.jpg'
              alt='...'
            />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
