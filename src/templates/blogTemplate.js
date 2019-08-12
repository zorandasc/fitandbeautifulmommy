import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
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

const BlogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
    images,
  } = data.post
  const mainImage = images[0]

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            <img
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt="blog"
            ></img>
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title}></SEO>
      <StyledHero img={mainImage.fluid}></StyledHero>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate
