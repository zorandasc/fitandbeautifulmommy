/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Fit and Beautiful mommy",
    description:
      "Explore and discover awsome wordwide food, lifestyle and blogs for fit and beautiful mommies",
    author: "@zorandsc",
    siteUrl: "https://fitandbeautifulmommy.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://fitandbeautifulmommy.com",
        sitemap: "https://fitandbeautifulmommy.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FitandBeautifulmommy`,
        short_name: `FitandBeautifulmommy`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#2892d7`,
        display: `standalone`,
        icon: `src/images/icon.gif`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
