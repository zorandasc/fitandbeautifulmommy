import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import RichTextImage from "../components/RichTextImage"

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      images {
        fluid {
          ...GatsbyContentfulFluid
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
    images,
    text: { json },
  } = data.post
  const mainImage = images[0]

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <RichTextImage contentfulId={node.data.target.sys.id}></RichTextImage>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title}></SEO>
      <StyledHero img={mainImage.fluid}></StyledHero>
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
    </Layout>
  )
}

export default BlogTemplate
