import React from "react"
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const { slug, title, images, published } = blog
  let mainImage = images[0].fluid

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage}
          className={styles.img}
          alt="single post"
        ></Image>
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>
          read more
        </AniLink>
        <p className={styles.date}>{published}</p>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
      </div>
    </article>
  )
}

export default BlogCard
