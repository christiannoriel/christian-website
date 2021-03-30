import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {/* Content for each page */
          children
        }
      </div>
      <footer>
        <p>Copyright 2021 Christian Noriel</p>
      </footer>
    </div>
  )
}

export default Layout
