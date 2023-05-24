import React from 'react'
import { Card } from 'flowbite-react'
import { myDev } from '../dev'

const CardComp = (): React.ReactElement => {
  return (
    <div className='lg:w-(90%) container mx-auto grid w-[1/4] grid-rows-1 gap-[4vw] px-4 pb-10 sm:w-full sm:grid-cols-2 sm:gap-[2.3vw]  sm:py-10'>
      {Object.keys(myDev).map((v, i) => (
        <Card
          key={i}
          imgAlt={myDev[v].name}
          imgSrc={myDev[v].img}>
          <h5 className='flex items-start justify-start text-base font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl'>
            {myDev[v].name}
          </h5>
          <p className='hidden text-ellipsis font-normal text-gray-700 dark:text-gray-400 sm:block'>
            {myDev[v].description}
          </p>
          <div className='container grid max-w-[35rem] gap-1 sm:grid-cols-5 sm:gap-2'>
            {myDev[v].ingredients.length > 0 && (
              <span className='mr-2 rounded bg-red-300 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300'>
                {myDev[v].ingredients[0]}
              </span>
            )}
            {myDev[v].ingredients.length > 1 && (
              <span className='mr-2 rounded bg-green-300 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300'>
                {myDev[v].ingredients[1]}
              </span>
            )}
            {myDev[v].ingredients.length > 2 && (
              <span className='mr-2 rounded bg-yellow-300 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'>
                {myDev[v].ingredients[2]}
              </span>
            )}
            {myDev[v].ingredients.length > 3 && (
              <span className='mr-2 rounded bg-blue-300 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300'>
                {myDev[v].ingredients[3]}
              </span>
            )}
            {myDev[v].ingredients.length > 4 && (
              <span className='mr-2 rounded bg-purple-300 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300'>
                {myDev[v].ingredients[4]}
              </span>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}
export default CardComp
