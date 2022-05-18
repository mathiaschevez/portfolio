import React from 'react'
import Link from 'next/link'
import { useStateContext } from '../context/StateContext'
import { AiFillGithub, AiOutlineLinkedin, AiOutlineFolderOpen, AiOutlineMessage } from 'react-icons/ai'
import { BsCardChecklist, BsSun, BsMoon } from 'react-icons/bs'

const Navbar = () => {
  const { darkModeActive, setDarkModeActive, isMobile } = useStateContext()

  const styles = {
    navbar: `${darkModeActive ? 'bg-[#151515] border-[#EBEBEB]' : 'bg-[#EBEBEB] border-[#151515]'} ${isMobile ? 'w-screen h-20': 'h-screen w-20 flex-col border-r'} fixed flex justify-between items-center pt-6 pb-9 px-3 z-50`,
    logo: `${darkModeActive ? 'text-[#EBEBEB]' : 'text-[#151515]'} text-xl font-bold`,
    navItems: `${isMobile ? 'flex-row' : 'flex-col'} flex items-center gap-6`,
    navItemButton: `${darkModeActive ? 'text-[#EBEBEB]' : 'text-[151515]'} flex flex-col items-center justify-center`,
    navFooter: `${isMobile ? 'flex-row' : 'flex-col'} flex gap-3 items-center`,
    theme: ``,
  }

  return (
    <div className={styles.navbar}>
      <Link href='/'>
        <button className={styles.logo}>MC</button>
      </Link>
      <div className={styles.navItems}>
        <Link href='/#projects'>
          <button className={styles.navItemButton}>
            <AiOutlineFolderOpen color={darkModeActive ? '#EBEBEB' : '#151515'} size={27} />
            <h1>Projects</h1>
          </button>
        </Link>
        <Link href='/#skills'>
          <button className={styles.navItemButton}>
            <BsCardChecklist color={darkModeActive ? '#EBEBEB' : '#151515'} size={27} />
            <h1>Skills</h1>
          </button>
        </Link>
        <Link href='/#contact'>
          <button className={styles.navItemButton}>
            <AiOutlineMessage color={darkModeActive ? '#EBEBEB' : '#151515'} size={27} />
            <h1>Contact</h1>
          </button>
        </Link>
      </div>
      <div className={styles.navFooter}>
        <a target='_blank' rel='noreferrer' href='https://github.com/mathiaschevez'>
          <button className={styles.navItemButton}>
            <AiFillGithub color={darkModeActive ? '#EBEBEB' : '#151515'} size={30}/>
          </button>
        </a>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mathias-chevez-21430b214/'>
          <button className={styles.navItemButton}>
            <AiOutlineLinkedin color={darkModeActive ? '#EBEBEB' : '#151515'} size={30} />
          </button>
        </a>
          <button className={styles.theme} onClick={() => setDarkModeActive(!darkModeActive)}>
            { darkModeActive ? (
              <BsSun color={darkModeActive ? '#EBEBEB' : '#151515'} size={27} />
            ) : (
              <BsMoon color={darkModeActive ? '#EBEBEB' : '#151515'} size={24} />
            )}
          </button>
      </div>
    </div>
  )
}

export default Navbar