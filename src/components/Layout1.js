import React from "react"
import Navbar1 from "./Navbar1"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Layout1 = ({ children }) => {
  return (
    <main>
      <Navbar1></Navbar1>
      <Sidebar></Sidebar>
      {children}
      <Footer></Footer>
    </main>
  )
}

export default Layout1
