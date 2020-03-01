import React from "react"
import { AppContext } from "../context/context"
import styles from "../css/sidebar.module.css"
import { FaTimes } from "react-icons/fa"
import links from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Sidebar = () => {
  const { isSidebarOpen, handleCloseSidebar, height } = React.useContext(
    AppContext
  )
  return (
    <div
      className={
        isSidebarOpen
          ? `${styles.sidebar}`
          : `${styles.sidebar} ${styles.closeSidebar} `
      }
    >
      <header
        className={
          height < 80
            ? `${styles.header}`
            : `${styles.header} ${styles.movingHeader}`
        }
      >
        <button onClick={handleCloseSidebar} className={styles.closeBtn}>
          close <FaTimes className={styles.closeIcon}></FaTimes>
        </button>
      </header>
      <section className={styles.linksContainer}>
        <div className={styles.links}>
          {links.map(item => {
            return (
              <AniLink
                key={item.id}
                to={item.path}
                className={styles.link}
                onClick={handleCloseSidebar}
              >
                {item.text}
              </AniLink>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Sidebar
