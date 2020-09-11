import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Layout1 = ({ children }) => {
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout1
