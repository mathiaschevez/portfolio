import React from 'react'
import Link from 'next/link'
import { useStateContext } from '../context/StateContext'
import Image from 'next/image'

const Project = ({ project: { title, image, tags, visit, id }}) => {
  const { darkModeActive, isMobile } = useStateContext()

  const styles = {
    project: `${darkModeActive ? 'border-[#EBEBEB]' : 'border-[#151515]'} ${isMobile ? 'w-full' : 'w-3/4'} border rounded py-6 hover:cursor-pointer hover:border-[#1E96FC] hover:text-[#1E96FC]`,
    tags: `flex justify-center gap-3`,
    projectTitle: `text-2xl w-full flex justify-center mb-3`,
    stack: `text-xl w-full flex justify-center`,
    actions: `flex justify-center mt-6`,
    button: `${darkModeActive ? 'bg-[#EBEBEB] text-[#151515] hover:bg-[#D3D5D9]' : 'bg-[#151515] text-[#EBEBEB] hover:bg-[#333]'} w-2/3 py-2 rounded text-center font-bold`
  }

  const handleNavigation = (e) => {
    e.preventDefault()
    window.open(visit, '_blank')
  }

  return (
      <Link href={`/projects/${id}`}>
        <div className={styles.project}>
          <div className='project-details'>
            <Image height='400' width='600' className='' src={image} alt='project-image'/>
            <h1 className={styles.projectTitle}>{title}</h1>
            <h1 className={styles.stack}>Stack</h1>
            <div className={styles.tags}>
              {tags?.map((tag) => (
                <h1 key={tag}>{tag}</h1>
              ))}
            </div>
            <div className={styles.actions}>
              <button className={styles.button} onClick={(e) => handleNavigation(e)}>VISIT</button>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default Project