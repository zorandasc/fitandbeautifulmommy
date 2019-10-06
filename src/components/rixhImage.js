import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styles from "../css/richImage.module.css"

// Gatsby adds 'c' to entity id if it starts with a number.
function fixId(id) {
  if (id.length === 23 && id.startsWith("c")) {
    return id.slice(1)
  }
}

export const richImage = ({ contentfulId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        edges {
          node {
            contentful_id
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  const image = data.allContentfulAsset.edges.find(
    edge => edge.node.contentful_id === fixId(contentfulId)
  )

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        fluid={image.node.fluid}
        alt={image.node.title}
      />
      <p className={styles.title}>{image.node.title}</p>
    </div>
  )
}

export default richImage
