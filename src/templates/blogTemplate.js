import React from "react"
import { graphql } from "gatsby"
import Layout1 from "../components/Layout1"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import RichTextImage from "../components/RichTextImage"
import { getFluidGatsbyImage } from "../tools/getFluidGatsbyImage"

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      text {
        json
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  const {
    title,
    published,
    heroImage,
    text: { json },
  } = data.post

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
      <SEO title={title}></SEO>
      <StyledHero img={heroImage.fluid}></StyledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <div className={styles.underline}></div>
          <div className={styles.info}>
            <i>
              <p className={styles.publish}>Published at: {published}</p>
            </i>
            <i>
              <p className={styles.publish}>Created by: Lily & Nazor</p>
            </i>
          </div>
          <article className={styles.blogtext}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout1>
  )
}

export default BlogTemplate
