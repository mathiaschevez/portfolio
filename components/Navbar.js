import Link from 'next/link'
import React from 'react'
import { useStateContext } from '../context/StateContext'
import { AiFillGithub, AiOutlineLinkedin, AiOutlineFolderOpen, AiOutlineMessage } from 'react-icons/ai'
import { BsCardChecklist, BsSun, BsMoon } from 'react-icons/bs'

const Navbar = () => {
  const { darkModeActive, setDarkModeActive } = useStateContext()

  const styles = {
    navbar: `${darkModeActive ? 'bg-[#151515]' : 'bg-[#EBEBEB]'} fixed h-screen w-20 flex flex-col justify-between items-center pt-6 pb-9 px-3`,
    logo: `${darkModeActive ? 'text-[#EBEBEB]' : 'text-[#151515]'} text-xl font-bold`,
    navItems: `flex flex-col items-center gap-6`,
    navItemButton: `${darkModeActive ? 'text-[#EBEBEB]' : 'text-[151515]'} flex flex-col items-center`,
    navFooter: `flex flex-col justify-center items-center gap-3`,
    theme: `mt-3`,
  }

  return (
    <div className={styles.navbar}>
      <Link href='/'>
        <button className={styles.logo}>MC</button>
      </Link>
      <div className={styles.navItems}>
        <Link href='/'>
          <button className={styles.navItemButton}>
            <AiOutlineFolderOpen color={darkModeActive ? '#EBEBEB' : '#151515'} size={27} />
            Projects
          </button>
        </Link>
        <Link href='/'>
          <button className={styles.navItemButton}>
            <BsCardChecklist color={darkModeActive ? '#EBEBEB' : '#151515'} size={27} />
            Skills
          </button>
        </Link>
        <Link href='/'>
          <button className={styles.navItemButton}>
            <AiOutlineMessage color={darkModeActive ? '#EBEBEB' : '#151515'} size={27} />
            Contact
          </button>
        </Link>
      </div>
      <div className={styles.navFooter}>
        <Link href='/'>
          <button>
            <AiFillGithub color={darkModeActive ? '#EBEBEB' : '#151515'} size={30}/>
          </button>
        </Link>
        <Link href='/'>
          <button>
            <AiOutlineLinkedin color={darkModeActive ? '#EBEBEB' : '#151515'} size={30} />
          </button>
        </Link>
        { darkModeActive ? (
          <button className={styles.theme} onClick={() => setDarkModeActive(false)}>
            <BsSun color={darkModeActive ? '#EBEBEB' : '#151515'} size={27} />
          </button>
        ) : (
          <button className={styles.theme} onClick={() => setDarkModeActive(true)}>
            <BsMoon color={darkModeActive ? '#EBEBEB' : '#151515'} size={24} />
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar