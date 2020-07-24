import React from "react"
<<<<<<< HEAD
import Navbar from "./NavbarOld"
=======
import Navbar from "./Navbar"
>>>>>>> 50b3966865a4e7421e9131f04a695e7d66728281
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </main>
  )
}

export default Layout
