import React from "react"
import Image from "gatsby-image"
import styles from "../css/rich-text-image.module.css"

export const RichTextImage = ({ fluid, title }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} fluid={fluid} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default RichTextImage
