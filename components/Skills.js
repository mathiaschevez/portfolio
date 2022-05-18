import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useStateContext } from '../context/StateContext'
import { AiOutlinePicture, AiFillHtml5 } from 'react-icons/ai'
import { BsLaptop, BsServer } from 'react-icons/bs'
import { SiTailwindcss, SiSolidity, SiNextdotjs, SiFirebase } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { DiCss3 } from 'react-icons/di'
import Image from 'next/image'


const Skills = () => {
  const { darkModeActive } = useStateContext()
  const isMobile = useMediaQuery({ query: '(max-width: 770px)' })
  const isPhone = useMediaQuery({ query: '(max-width: 670px)' })
  const sanity = '/images/sanity.png'

  const styles = {
    skills: `${darkModeActive ? 'bg-[#151515] text-[#EBEBEB]' : 'bg-[#EBEBEB] text-[#151515]'} ${isMobile ? 'pl-20 grid pr-20 py-3' : 'pl-40 justify-center flex flex-col gap-32'} ${isPhone ? 'grid-cols-1' : 'grid-cols-2'} h-screen gap-6`,
    skill: `${isMobile ? 'flex-col gap-3' : 'gap-6'} flex items-center gap-6`,
    title: `text-4xl font-bold border-r pr-9`,
    icons: `flex gap-6 items-center`,
    image: `w-20 h-20`
  }

  return (
    <div id='skills' className={styles.skills}>
      <div className={styles.skill}>
        <BsLaptop color={darkModeActive ? '#EBEBEB' : '#151515'} size={72}/>
        <h1 className={styles.title}>Frontend</h1>
        <div className={styles.icons}>
          <AiFillHtml5 color={darkModeActive ? '#EBEBEB' : '#151515'} size={36} />
          <DiCss3 color={darkModeActive ? '#EBEBEB' : '#151515'} size={36}/>
          <FaReact color={darkModeActive ? '#EBEBEB' : '#151515'} size={36}/>
          <SiNextdotjs color={darkModeActive ? '#EBEBEB' : '#151515'} size={36} />
          <SiTailwindcss color={darkModeActive ? '#EBEBEB' : '#151515'} size={36} />
        </div>
      </div>
      <div className={styles.skill}>
        <BsServer color={darkModeActive ? '#EBEBEB' : '#151515'} size={72}/>
        <h1 className={styles.title}>Backend</h1>
        <div className={styles.icons}>
          <SiSolidity color={darkModeActive ? '#EBEBEB' : '#151515'} size={36}/>
          <Image height='70px' width='70px' src={sanity} alt='sanity' className={styles.image}/>
          <SiFirebase color={darkModeActive ? '#EBEBEB' : '#151515'} size={36}/>
        </div>
      </div>
      <div className={styles.skill}>
        <AiOutlinePicture color={darkModeActive ? '#EBEBEB' : '#151515'} size={72}/>
        <h1 className={styles.title}>Design</h1>
        <div className={styles.icons}>
          <FiFigma color={darkModeActive ? '#EBEBEB' : '#151515'} size={36}/>
        </div>
      </div>
    </div>
  )
}

export default Skills