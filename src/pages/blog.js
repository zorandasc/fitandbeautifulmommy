import React from "react"
import Layout1 from "../components/Layout1"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "./../components/Blog/BlogList"
import SEO from "../components/SEO"

const blog = ({ data }) => {
  return (
    <Layout1>
      <SEO title="Blog"></SEO>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}></StyledHero>
      <BlogList></BlogList>
    </Layout1>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default blog
