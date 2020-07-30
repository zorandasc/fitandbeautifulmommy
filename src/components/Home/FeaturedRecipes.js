import React from "react"
import Recipe from "../Recipes/Recipe"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"

const getRecipes = graphql`
  query {
    featuredRecipes: allContentfulRecipes(filter: { featured: { eq: true } }) {
      edges {
        node {
          id
          slug
          time
          type
          name
          featured
          contentful_id
          images {
            id
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const FeaturedRecipes = () => {
  const response = useStaticQuery(getRecipes)
  const recipes = response.featuredRecipes.edges
  return (
    <section className={styles.recipes}>
      <Title title="featurd" subtitle="recipes"></Title>
      <div className={styles.center}>
        {recipes.map(({ node }) => {
          return <Recipe key={node.contentful_id} recipe={node}></Recipe>
        })}
      </div>
      <AniLink fade to="/recipes" className="btn-primary">
        all recipes
      </AniLink>
    </section>
  )
}

export default FeaturedRecipes
