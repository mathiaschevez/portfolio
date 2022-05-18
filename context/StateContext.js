import React, { createContext, useState, useEffect, useContext } from 'react'
import { useMediaQuery } from 'react-responsive'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [darkModeActive, setDarkModeActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isPhone, setIsPhone] = useState(false)

  useEffect(() => {
    if(useMediaQuery({ query: '(max-width: 770px)' })) {
      setIsMobile(true)
      setIsPhone(false)
    }
    if(useMediaQuery({ query: '(max-width: 670px)' })) {
      setIsMobile(false)
      setIsPhone(true)
    }
  }, [])
  

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches && setDarkModeActive(true)
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
      if (event.matches) {
        setDarkModeActive(true)
      } else {
        setDarkModeActive(false)
      }
    })
  }, [])
  

  return (
    <Context.Provider
      value={{
        darkModeActive,
        setDarkModeActive,
        isPhone,
        isMobile
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)