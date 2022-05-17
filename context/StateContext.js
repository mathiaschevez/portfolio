import React, { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [darkModeActive, setDarkModeActive] = useState(false)

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
        setDarkModeActive
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)