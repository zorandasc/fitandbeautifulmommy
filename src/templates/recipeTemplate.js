import React from "react"
import { graphql } from "gatsby"
import Layout1 from "../components/Layout1"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import RichTextImage from "../components/RichTextImage"
import { getFluidGatsbyImage } from "../tools/getFluidGatsbyImage"

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
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const RecipeTemplate = ({ data }) => {
  const { name, time, type, ingredients, preparation, heroImage } = data.recipe

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        if (node.data.target) {
          const { file, title } = node.data.target.fields

          const image = {
            file: file["en-US"],
          }

          const fluidProps = getFluidGatsbyImage(image, {})
          return <RichTextImage fluid={fluidProps} title={title["en-US"]} />
        }
      },
    },
  }

  return (
    <Layout1>
      <SEO title={name}></SEO>
      <StyledHero img={heroImage.fluid}></StyledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <h2>{name}</h2>
          <div className={styles.underline}></div>
          <div className={styles.info}>
            <i>
              <p className={styles.category}>Type: {type}</p>
            </i>
            <i>
              <p className={styles.category}>Duration: {time} min</p>
            </i>
          </div>

          <h3>Ingredients:</h3>
          <article className={styles.recipetext}>
            {documentToReactComponents(ingredients.json)}
          </article>
          <h3>Preparation:</h3>
          <article className={styles.recipetext}>
            {documentToReactComponents(preparation.json, options)}
          </article>
          <AniLink fade to="/recipes" className="btn-primary">
            back to all recipes
          </AniLink>
        </div>
      </section>
    </Layout1>
  )
}

export default RecipeTemplate
