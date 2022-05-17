import React from 'react'
import { Navbar, Footer } from '../components'

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout