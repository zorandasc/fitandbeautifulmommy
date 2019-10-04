import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import Image from "gatsby-image"

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
      text2 {
        json
      }
      text3 {
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
  const { title, published, text, text2, text3, images } = data.post
  const [mainImage, ...blogImages] = images

  return (
    <Layout>
      <SEO title={title}></SEO>
      <StyledHero img={mainImage.fluid}></StyledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <div className={styles.underline}></div>
          <h4>Published at: {published}</h4>
          <article className={styles.desc}>
            {documentToReactComponents(text.json)}
          </article>
          <div className={styles.images}>
            {blogImages.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid}
                  alt="blog images"
                  className={styles.image}
                ></Image>
              )
            })}
          </div>
          <article className={styles.desc}>
            {documentToReactComponents(text2["json"])}
            {documentToReactComponents(text3["json"])}
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
