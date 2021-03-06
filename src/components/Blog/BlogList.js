import React from "react"
import BlogCard from "./BlogCard"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../Title"
import styles from "../../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulPosts(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          slug
          title
          id: contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs"></Title>
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node}></BlogCard>
        })}
      </div>
    </section>
  )
}

export default BlogList
