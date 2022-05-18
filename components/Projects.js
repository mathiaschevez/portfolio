import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { projects } from '../constants/constants'
import Project from './Project'
import { useStateContext } from '../context/StateContext'

const Projects = () => {
  const { darkModeActive } = useStateContext()
  const isMobile = useMediaQuery({ query: '(max-width: 770px)' })
  const isPhone = useMediaQuery({ query: '(max-width: 670px)' })

  const styles = {
    projects: `${darkModeActive ? 'bg-[#151515] text-[#EBEBEB]' : 'bg-[#EBEBEB] text-[#151515]'} ${isMobile ? 'px-10' : 'px-40'} ${isPhone ? 'grid-cols-1' : 'grid-cols-2'} py-20 grid gap-9`,
  }

  return (
    <div id='projects' className={styles.projects}>
      {projects?.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}


export default Projects