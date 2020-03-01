import React from "react"
import Layout1 from "../components/Layout1"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

export default function contact({ data }) {
  return (
    <Layout1>
      <SEO title="Contact"></SEO>
      <StyledHero img={data.connectBcg.childImageSharp.fluid}></StyledHero>
      <Contact></Contact>
    </Layout1>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
