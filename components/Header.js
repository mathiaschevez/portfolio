import React from 'react'
import { useStateContext } from '../context/StateContext'

const Header = () => {
  const { darkModeActive, isMobile, isPhone } = useStateContext()

  const styles = {
    header: `${darkModeActive ? 'bg-[#151515]' : 'bg-[#EBEBEB]' } pl-40 h-screen flex flex-col justify-center gap-6 mobileHeader phoneHeader`,
    title: `${isPhone ? 'text-5xl' : 'text-7xl'} gradient-animation font-bold mobileHeaderText phoneHeaderText`,
    subtitle: `${darkModeActive ? 'text-[#EBEBEB]' : 'text-[#151515]'} text-xl font-bold`,
    actions: `flex gap-9`,
    button: `${darkModeActive ? 'bg-[#EBEBEB] text-[#151515] hover:bg-[#D3D5D9]' : 'bg-[#151515] text-[#EBEBEB] hover:bg-[#333]'} font-bold px-3 py-3 rounded hover:cursor-pointer`
  }

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>HEY THERE! <br/> I'M MATHIAS CHEVEZ</h1>
      <h1 className={styles.subtitle}>A WEB DEVELOPER WITH A SPECIALTY IN REACT JS</h1>
      <div className={styles.actions}>
        <a href='#projects' className={styles.button}>PROJECTS</a>
        <a href='#contact' className={styles.button}>CONTACT</a>
      </div>
    </div>
  )
}

export default Header