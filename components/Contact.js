import React, { useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useStateContext } from '../context/StateContext'
import { ImCross } from 'react-icons/im'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 770px)' })
  const isPhone = useMediaQuery({ query: '(max-width: 670px)' })
  const { darkModeActive } = useStateContext()
  const form = useRef()

  const styles = {
    contact: `${darkModeActive ? 'bg-[#151515] text-[#EBEBEB]' : 'bg-[#EBEBEB] text-[#151515]'} mobileContact phoneContact flex items-center h-screen`,
    form: `phoneForm w-2/3 flex flex-col gap-6`,
    formInfo: `phoneInfo flex justify-between`,
    formMessage: `flex justify-between`,
    formAlert: `${showMessage ? 'flex' : 'hidden'} bg-[#1e96fc] justify-around items-center w-full rounded py-3 font-bold`,
    label: `phoneLabel text-4xl font-bold`,
    input: `phoneInput w-1/2 rounded focus:outline-none px-2 py-3 text-[#151515] border focus:border-[#1e96fc] font-bold`,
    textArea: `phoneTextarea w-1/2 rounded focus:outline-none px-2 h-32 py-3 resize-none text-[#151515] border focus:border-[#1e96fc] font-bold`,
    formButton: `${darkModeActive ? 'bg-[#EBEBEB] text-[#151515] hover:bg-[#D3D5D9]' : 'bg-[#151515] text-[#EBEBEB] hover:bg-[#333]'} mobileButton w-1/2 rounded mt-6 py-3 flex justify-center self-end hover:cursor-pointer font-bold`,
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('portfolio_contact', 'template_821ko5c', form.current, 'qGOPJMw0iKk3-NPpR')
      .then((result) => {
        console.log(result.text)
        setShowMessage(true)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <div id='contact' className={styles.contact}>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div className={styles.formInfo}>
          <label className={styles.label}>Full Name</label>
          <input className={styles.input} type='text' name='user_name'/>
        </div>
        <div className={styles.formInfo}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type='email' name='user_email'/>
        </div>
        <div className={styles.formInfo}>
          <label className={styles.label}>Message</label>
          <textarea className={styles.textArea} name='message'/>
        </div> 
        <input className={styles.formButton} type='submit' value='SEND  '/>
        { showMessage && 
          <div className={styles.formAlert}>
            <h1>Message Submitted!</h1>
            <button><ImCross onClick={() => setShowMessage(false)}/></button>
          </div>
        }
      </form>
    </div>
  )
}

export default Contact