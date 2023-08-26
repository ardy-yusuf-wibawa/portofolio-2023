import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'

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
  // Add more techStack stacks and colors as needed
}

const TechStackTag = ({ techStack }) => {
  const bgColorClass = `bg-${techStackColors[techStack]}-300`
  const textColorClass = `text-${techStackColors[techStack]}-800`

  return (
    <span
      className={`mr-2 rounded ${bgColorClass} px-2.5 py-0.5 text-xs font-medium ${textColorClass}`}>
      {techStack}
    </span>
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
      } catch (error) {
        console.error('error fetching data:', error)
      }
    }
    fetchProjectData()
  }, [])

  return (
    <div className='lg:w-(90%) container mx-auto grid w-[1/4] grid-rows-1 gap-[4vw] px-4 pb-10 sm:w-full sm:grid-cols-2 sm:gap-[2.3vw]  sm:py-10'>
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
    </div>
  )
}

export default CardComp
