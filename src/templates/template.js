import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

const Template = ({ data }) => {
  const {
    name,
    time,
    type,
    ingredients: { ingredients },
    description: { description },
    images,
  } = data.recipe
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
                  alt="single tour"
                  className={styles.image}
                ></Img>
              )
            })}
          </div>
          <h2>{name}</h2>

          <h4>Type: {type}</h4>
          <h4>Duration: {time} min</h4>
          <h4>Ingredients</h4>
          <p className={styles.desc}>{ingredients}</p>
          <h4>Preparation</h4>
          <p className={styles.desc}>{description}</p>
          <AniLink fade to="/recipes" className="btn-primary">
            back to recipes
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
        ingredients
      }
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Template
