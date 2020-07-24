import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../images/optimised1.svg"
import styles from "../css/navbar.module.css"
import links from "../constants/links"
import icons from "../constants/social-icons1"
import { FaAlignRight } from "react-icons/fa"
import { AppContext } from "../context"

<<<<<<< HEAD
const Navbar = () => {
=======
const Navbar1 = () => {
>>>>>>> 50b3966865a4e7421e9131f04a695e7d66728281
  const { size, handleOpenSidebar, height } = React.useContext(AppContext)

  if (size > 992) {
    return (
      <nav
        className={
          height < 80
            ? `${styles.navbar}`
            : `${styles.navbar} ${styles.navbarFixed}`
        }
      >
        <div className={styles.center}>
          <AniLink to="/">
<<<<<<< HEAD
            <img src={logo} alt="fitandbeatiful momy logo"></img>
=======
            <img src={logo} alt="fitandbeatiful mommy logo"></img>
>>>>>>> 50b3966865a4e7421e9131f04a695e7d66728281
          </AniLink>
          <ul className={styles.links}>
            {links.map(link => {
              return (
                <li key={link.id}>
                  <AniLink to={link.path} className={styles.navLink}>
                    {link.text}
                  </AniLink>
                </li>
              )
            })}
          </ul>
          <div className={styles.icons}>
            {icons.map(icon => {
              return (
                <a
                  key={icon.id}
                  href={icon.url}
                  className={styles.navIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="socials links"
                >
                  {icon.icon}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    )
  } else {
    return (
      <nav
        className={
          height < 80
            ? `${styles.navbar}`
            : `${styles.navbar} ${styles.navbarFixed}`
        }
      >
        <div className={styles.header}>
          <AniLink to="/">
            <img src={logo} alt="fitandbeatiful momy logo"></img>
          </AniLink>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={handleOpenSidebar}
          >
<<<<<<< HEAD
            <FaAlignRight className={styles.toggleIcon}></FaAlignRight>
=======
            menu<FaAlignRight className={styles.toggleIcon}></FaAlignRight>
>>>>>>> 50b3966865a4e7421e9131f04a695e7d66728281
          </button>
        </div>
      </nav>
    )
  }
}

export default Navbar1
