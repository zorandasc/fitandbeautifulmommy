import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

// Gatsby adds 'c' to entity id if it starts with a number.
function fixId(id) {
  if (id.length === 23 && id.startsWith("c")) {
    return id.slice(1)
  }
}

export const richImage = ({ contentfulId, className }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        edges {
          node {
            contentful_id
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

  return <Image className={className} fluid={image.node.fluid} />
}

export default styled(richImage)`
  box-shadow: var(--darkShadow);
  max-width: 900px;
  max-height: 600px;
  margin: 3rem auto;
`
