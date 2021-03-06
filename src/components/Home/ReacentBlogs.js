import React from "react"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import BlogCard from "../../components/Blog/BlogCard"

const getPosts = graphql`
  query {
    posts: allContentfulPosts(
      sort: { fields: published, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          slug
          title
          id: contentful_id
          images {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const RecentBlogs = () => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <section className={styles.blogs}>
      <Title title="recent" subtitle="blogs"></Title>
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node}></BlogCard>
        })}
      </div>
      <AniLink fade to="/blog" className="btn-primary">
        all blogs
      </AniLink>
    </section>
  )
}

export default RecentBlogs
