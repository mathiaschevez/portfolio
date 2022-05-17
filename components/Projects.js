import React from 'react'
import { projects } from '../constants/constants'
import Project from './Project'
import { useStateContext } from '../context/StateContext'

const Projects = () => {
  const { darkModeActive } = useStateContext()

  const styles = {
    projects: `${darkModeActive ? 'bg-[#151515] text-[#EBEBEB]' : 'bg-[#EBEBEB] text-[#151515]'} py-20 pl-40 pr-20 grid grid-cols-2 gap-9`,
  }

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}


export default Projects