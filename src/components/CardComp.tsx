import React from 'react'
import { Card } from 'flowbite-react'
import { myDev, type Dev } from '../datas/dev'
import { Link } from 'react-router-dom'

interface TechStackTagProps {
  techStack: string
}
interface LinkPathProps {
  paths?: Array<{ label: string, url: string }>
}

const techStackColors: Record<string, string> = {
  HTML: 'red',
  CSS: 'blue',
  'Tailwind CSS': 'blue',
  Javascript: 'yellow',
  ReactJS: 'red',
  ExpressJS: 'green',
  Typescript: 'yellow',
  MySQL: 'purple',
  'React Native': 'red'
  // Add more tech stacks and colors as needed
}

const TechStackTag: React.FC<TechStackTagProps> = ({ techStack }) => {
  const colorClass = `bg-${techStackColors[techStack]}-300`
  const textColorClass = `text-${techStackColors[techStack]}-800`

  return (
    <span
      className={`mr-2 rounded ${colorClass} px-2.5 py-0.5 text-xs font-medium ${textColorClass}`}>
      {techStack}
    </span>
  )
}

const LinkPath: React.FC<LinkPathProps> = ({ paths = [] }) => {
  return (
    <>
      {paths.map((path, index) => (
        <Link
          key={index}
          to={path.url}
          target='_blank'
          rel='noopener noreferrer'
          className='hidden text-ellipsis font-normal text-gray-700 dark:text-gray-400 sm:block'>
          <span>{path.label} : </span>
          <span className='text-ellipsis font-normal text-gray-700 underline dark:text-gray-400'>
            {path.url}
          </span>
        </Link>
      ))}
    </>
  )
}

const CardComp: React.FC = () => {
  return (
    <div className='lg:w-(90%) container mx-auto grid w-[1/4] grid-rows-1 gap-[4vw] px-4 pb-10 sm:w-full sm:grid-cols-2 sm:gap-[2.3vw]  sm:py-10'>
      {Object.keys(myDev).map((key, i) => {
        const dev: Dev = myDev[key]

        return (
          <Card
            key={i}
            imgAlt={dev.name}
            imgSrc={dev.img}>
            <h5 className='flex items-start justify-start text-base font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl'>
              {dev.name}
            </h5>
            <p className='hidden text-ellipsis font-normal text-gray-700 dark:text-gray-400 sm:block'>
              {dev.description}
            </p>
            <LinkPath paths={dev.paths} />
            <div className='container grid max-w-[35rem] gap-1 sm:gap-2 lg:grid-cols-5'>
              {dev.techStack.map(
                (tech, index) =>
                  index < 5 && (
                    <TechStackTag
                      key={index}
                      techStack={tech}
                    />
                  )
              )}
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default CardComp
