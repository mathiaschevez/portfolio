import React, { useState } from 'react'
import { projects } from '../../constants/constants'
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/StateContext'
import Link from 'next/link'
import Image from 'next/image'

const ProjectDetail = () => {
  const router = useRouter()
  const { darkModeActive } = useStateContext()
  const { id } = router.query
  const currentProject = projects[id]

  const styles = {
    project: `${darkModeActive ? 'bg-[#151515] text-[#EBEBEB]' : 'bg-[#EBEBEB] text-[#151515]'} pl-40 h-screen flex items-center gap-9 pr-20`,
    projectImage: `w-1/2 h-1/2`,
    projectDetails: `flex flex-col gap-12`,
    projectTitle: `text-6xl`,
    projectActions: `flex gap-9`,
    projectButton: `${darkModeActive ? 'bg-[#EBEBEB] text-[#151515] hover:bg-[#D3D5D9]' : 'bg-[#151515] text-[#EBEBEB] hover:bg-[#333]'} w-1/3 py-2 rounded flex items-center justify-center z-20 font-bold hover:cursor-pointer`
  }

  return (
    <div className={styles.project}>
      <Image 
        className={styles.projectImage}
        width='1000'
        height='600'
        src={currentProject?.image} 
        alt='krypt'
      />
      <div className={styles.projectDetails}>
        <h1 className={styles.projectTitle}>{currentProject?.title}</h1>
        <h1>{currentProject?.description}</h1>
        <div className={styles.projectActions}>
          <a target='_blank' rel='noreferrer' href={currentProject?.visit} className={styles.projectButton}>VISIT</a>
          <Link href='/#projects'>
            <button className={styles.projectButton}>
              BACK TO PROJECTS
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail