import React, { Component } from "react"
import Layout1 from "../components/Layout1"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Recipes from "../components/Recipes/Recipes"
import SEO from "../components/SEO"

export default class recipes extends Component {
  render() {
    return (
      <Layout1>
        <SEO title="Recipes"></SEO>
        <StyledHero
          img={this.props.data.defaultBcg.childImageSharp.fluid}
        ></StyledHero>
        <Recipes></Recipes>
      </Layout1>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "cook.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
