import React from "react"
import styles from "../../css/recipe.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import { FaClock } from "react-icons/fa"

const Recipe = ({ recipe }) => {
  const { name, type, time, slug, images } = recipe
  let mainImage = images[0].fluid

  return (
    <article className={styles.recipebox}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img}></Image>
        <AniLink fade className={styles.link} to={`/recipes/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <div>
            <h4>{type}</h4>
          </div>
          <h4>{time} min</h4>
        </div>
      </div>
    </article>
  )
}

export default Recipe
