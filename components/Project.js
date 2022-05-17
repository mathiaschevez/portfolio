import React from 'react'
import Link from 'next/link'
import { useStateContext } from '../context/StateContext'

const Project = ({ project: { title, description, image, tags, source, visit, id}}) => {
  const { darkModeActive } = useStateContext()

  const styles = {
    project: `${darkModeActive ? 'border-[#EBEBEB]' : 'border-[#151515]'} border rounded px-3 py-6 hover:cursor-pointer hover:border-[#1E96FC] hover:text-[#1E96FC] w-2/3`,
    tags: `flex justify-center gap-3`,
    projectTitle: `text-2xl w-full flex justify-center mb-3`,
    stack: `text-xl w-full flex justify-center`,
    actions: `flex justify-center mt-6`,
    button: `${darkModeActive ? 'bg-[#EBEBEB] text-[#151515]' : 'bg-[#151515] text-[#EBEBEB]'} w-2/3 py-2 rounded text-center z-20`
  }

  return (
      <Link href={`/projects/${id}`}>
        <div className={styles.project}>
          <div className='project-details'>
            <img src={image} alt='project-image'/>
            <h1 className={styles.projectTitle}>{title}</h1>
            <h1 className={styles.stack}>Stack</h1>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <h1>{tag}</h1>
              ))}
            </div>
            <div className={styles.actions}>
              <a className={styles.button} target='_blank' href={visit}>Visit</a>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default Project