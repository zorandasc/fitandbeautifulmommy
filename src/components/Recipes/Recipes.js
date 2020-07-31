import React from "react"
import RecipeList from "./RecipeList"
import { useStaticQuery, graphql } from "gatsby"

const getRecipes = graphql`
  query {
    recipes: allContentfulRecipes {
      edges {
        node {
          id
          slug
          time
          type
          name
          featured
          contentful_id
          heroImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Recipes = () => {
  const { recipes } = useStaticQuery(getRecipes)
  return (
    <div>
      <RecipeList recipes={recipes}></RecipeList>
    </div>
  )
}

export default Recipes
