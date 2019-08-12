import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import About from "../components/Home/About"

import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import FeaturedRecipes from "../components/Home/FeaturedRecipes"
import RecentBlogs from "../components/Home/ReacentBlogs"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" description="this is home description"></SEO>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="exploring unknown"
        info="Explore and discover awsome worldwide food recipes, lifestyle and blogs from fit and beautiful mommies"
      >
        <AniLink fade to="/recipes" className="btn-white">
          explore recipes
        </AniLink>
      </Banner>
    </StyledHero>
    <FeaturedRecipes></FeaturedRecipes>
    <RecentBlogs></RecentBlogs>
    <About></About>
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "table.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
