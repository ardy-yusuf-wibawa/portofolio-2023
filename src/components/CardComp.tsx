import React from 'react'
import { Card } from 'flowbite-react'
import { myDev } from '../dev'

const CardComp = (): React.ReactElement => {
  return (
    <div className='container mx-auto lg:w-(90%) px-4 sm:w-full w-[1/4] sm:py-10 grid sm:grid-cols-2 sm:gap-[2.3vw] pb-10 grid-rows-1  gap-[4vw]'>
      {Object.keys(myDev).map((v, i) => (
        <Card
          key={i}
          imgAlt={myDev[v].name}
          imgSrc={myDev[v].img}>
          <h5 className='sm:text-2xl flex justify-start items-start text-base font-bold tracking-tight text-gray-900 dark:text-white'>
            {myDev[v].name}
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400 hidden sm:block'>
            {myDev[v].description}
          </p>
          <div className='container sm:gap-2 gap-1 grid sm:grid-cols-3 max-w-xs'>

          {myDev[v].ingredients.length > 0 && (
            <span className='bg-red-300 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>
              {myDev[v].ingredients[0]}
            </span>
          )}
          {myDev[v].ingredients.length > 1 && (
            <span className='bg-green-300 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
              {myDev[v].ingredients[1]}
            </span>
          )}
          {myDev[v].ingredients.length > 2 && (
            <span className='bg-yellow-300 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
              {myDev[v].ingredients[2]}
            </span>
          )}
          </div>
        </Card>
      ))}
    </div>
  )
}
export default CardComp
