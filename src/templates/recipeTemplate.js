import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const RecipeTemplate = ({ data }) => {
  const { name, time, type, ingredients, preparation, images } = data.recipe
  const [mainImage, ...recipeImages] = images

  return (
    <Layout>
      <SEO title={name}></SEO>
      <StyledHero img={mainImage.fluid}></StyledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {recipeImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single recipe"
                  className={styles.image}
                ></Img>
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <h4>Type: {type}</h4>
            <h4>Duration: {time} min</h4>
          </div>

          <h3>Ingredients:</h3>
          <p className={styles.desc}>
            {documentToReactComponents(ingredients.json)}
          </p>
          <h3>Preparation:</h3>
          <p className={styles.desc}>
            {documentToReactComponents(preparation.json)}
          </p>
          <AniLink fade to="/recipes" className="btn-primary">
            back to all recipes
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    recipe: contentfulRecipes(slug: { eq: $slug }) {
      name
      time
      type
      ingredients {
        json
      }
      preparation {
        json
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default RecipeTemplate
