import React, { useState } from 'react'
import { useStateContext } from '../context/StateContext'
import { ImCross } from 'react-icons/im'

const Footer = () => {
  const [showMessage, setShowMessage] = useState(false)
  const { darkModeActive, isMobile, isPhone } = useStateContext()

  const styles = {
    footer: `${darkModeActive ? 'bg-[#151515] text-[#EBEBEB] border-[#EBEBEB]' : 'bg-[#EBEBEB] text-[#151515] border-[#151515]'} mobileFooter phoneFooter flex justify-between pl-40 pr-20 py-9 border-t`,
    footerDetail: `phoneDetail mobileDetail flex gap-3`,
    footerTitle: `mobileTitle text-2xl font-bold`,
    footerButton: `mobileButton hover:underline`,
    footerAlert: `${showMessage ? 'flex' : 'hidden'} phoneAlert w-1/3 bg-[#1e96fc] justify-around items-center rounded font-bold`,
  }

  const handleCopy = (value) => {
    console.log(value)
    setShowMessage(true)

    navigator.clipboard.writeText(value)
  }

  return (
    <div id='contact' className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerDetail}>
          <h1 className={styles.footerTitle}>Email: </h1>
          <button className={styles.footerButton} onClick={() => handleCopy('mathiaschevez10@gmail.com')}>mathiaschevez10@gmail.com</button>
        </div>
        <div className={styles.footerDetail}>
          <h1 className={styles.footerTitle}>Phone: </h1>
          <button className={styles.footerButton} onClick={() => handleCopy('(435) - 602 - 2603')}>(435) - 602 - 2603</button>
        </div>
      </div>
      <div className={styles.footerAlert}>
        <h1 className='text-white'>Copied!</h1>
        <button className='text-white'><ImCross onClick={() => setShowMessage(false)}/></button>
      </div>
    </div> 
  )
}

export default Footer