import React from 'react'
import { useStateContext } from '../context/StateContext'

const Header = () => {
  const { darkModeActive } = useStateContext()

  const styles = {
    header: `${darkModeActive ? 'bg-[#151515]' : 'bg-[#EBEBEB]' } pl-40 h-screen flex flex-col justify-center gap-6`,
    title: `gradient-animation text-7xl font-bold`,
    subtitle: `${darkModeActive ? 'text-[#EBEBEB]' : 'text-[#151515]'} text-xl font-bold`,
    actions: `flex gap-9`,
    button: `${darkModeActive ? 'bg-[#EBEBEB] text-[#151515]' : 'bg-[#151515] text-[#EBEBEB]'} font-bold px-3 py-3 rounded`
  }

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>HEY THERE! <br/> I'M MATHIAS CHEVEZ</h1>
      <h1 className={styles.subtitle}>A WEB DEVELOPER WITH A SPECIALY IN REACT JS</h1>
      <div className={styles.actions}>
        <button className={styles.button}>PROJECTS</button>
        <button className={styles.button}>CONTACT</button>
      </div>
    </div>
  )
}

export default Header