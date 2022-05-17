import React, { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext()

export const StateContext = () => {
  return (
    <Context.Provider
      value={{

      }}
    >
      
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)