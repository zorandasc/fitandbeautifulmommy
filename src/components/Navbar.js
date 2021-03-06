import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../images/logo.svg"
import styles from "../css/navbar.module.css"
import links from "../constants/links"
import icons from "../constants/social-icons1"
import { FaAlignRight } from "react-icons/fa"
import { AppContext } from "../context"

const Navbar = () => {
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
            <img src={logo} alt="fitandbeatiful momy logo"></img>
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
            aria-label="Menu button"
          >
            <FaAlignRight className={styles.toggleIcon}></FaAlignRight>
          </button>
        </div>
      </nav>
    )
  }
}

export default Navbar
