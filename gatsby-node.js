const path = require("path")

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      recipes: allContentfulRecipes {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.recipes.edges.forEach(({ node }) => {
    createPage({
      path: `recipes/${node.slug}`,
      component: path.resolve("./src/templates/recipeTemplate.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blogTemplate.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
