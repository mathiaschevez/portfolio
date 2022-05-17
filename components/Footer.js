import React from 'react'
import { useStateContext } from '../context/StateContext'

const Footer = () => {
  const { darkModeActive } = useStateContext()

  const styles = {
    footer: `${darkModeActive ? 'bg-[#151515] text-[#EBEBEB] border-[#EBEBEB]' : 'bg-[#EBEBEB] text-[#151515] border-[#151515]'} flex justify-center items-center h-20 border-t`
  }

  return (
    <div className={styles.footer}>
      Footer
    </div>
  )
}

export default Footer