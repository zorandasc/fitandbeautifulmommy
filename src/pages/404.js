import React from "react"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function error() {
  return (
    <Layout>
      <SEO title="Error"></SEO>
      <header className={styles.error}>
        <Banner title="oops it is a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
