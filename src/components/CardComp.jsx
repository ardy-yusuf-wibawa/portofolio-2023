import React, { useEffect, useState } from 'react'
import { Card, Badge } from 'flowbite-react'
import { Link } from 'react-router-dom'
import DoorDashFavorite from '../utils/loader'

const techStackColors = {
  HTML: 'red',
  CSS: 'blue',
  'Tailwind CSS': 'blue',
  Javascript: 'yellow',
  ReactJS: 'red',
  ExpressJS: 'green',
  Typescript: 'yellow',
  MySQL: 'purple',
  'React Native': 'red'
}

const TechStackTag = ({ techStack }) => {
  const bgColorClass = `${techStackColors[techStack]}`

  return (
    <Badge
      color={`${bgColorClass}`}
      size='sm'>
      {techStack}
    </Badge>
  )
}

const LinkPath = ({ paths }) => {
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

const CardComp = () => {
  const apiProject = process.env.REACT_APP_GOOGLE_SPREADSHEET_API_PROJECT
  const [projectData, setProjectData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectResponse = await fetch(apiProject)
        const dataProject = await projectResponse.json()

        // Parsing the JSON strings into arrays
        const projectsWithArrays = dataProject.map((project) => ({
          ...project,
          paths: JSON.parse(project.paths),
          techStack: JSON.parse(project.techStack)
        }))

        setProjectData(projectsWithArrays)
        setLoading(false)
      } catch (error) {
        console.error('error fetching data:', error)
        setLoading(false)
      }
    }
    fetchProjectData()
  }, [])

  return (
    <>
      <div className='lg:w-(90%) container mx-auto grid w-[1/4] grid-rows-1 gap-[4vw] px-4 pb-10 sm:w-full sm:grid-cols-2 sm:gap-[2.3vw]  sm:py-10'>
        {loading ? (
          <>
            <DoorDashFavorite />
            <DoorDashFavorite />
            <DoorDashFavorite />
            <DoorDashFavorite />
            <DoorDashFavorite />
            <DoorDashFavorite />
          </>
        ) : (
          <>
            {projectData.map((value, index) => (
              <Card
                key={index}
                imgAlt={value.name}
                imgSrc={value.img}>
                <h5 className='flex items-start justify-start text-base font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl'>
                  {value.name}
                </h5>
                <p className='hidden text-ellipsis font-normal text-gray-700 dark:text-gray-400 sm:block'>
                  {value.desc}
                </p>
                <LinkPath paths={value.paths} />
                <div className='container grid max-w-[35rem] gap-1 sm:gap-2 lg:grid-cols-5'>
                  {value.techStack.map(
                    (techStack, index) =>
                      index < 5 && (
                        <TechStackTag
                          key={index}
                          techStack={techStack}
                        />
                      )
                  )}
                </div>
              </Card>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default CardComp
