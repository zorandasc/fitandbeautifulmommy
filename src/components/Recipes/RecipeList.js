import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Recipe from "./Recipe"
import Title from "../Title"

export default class RecipeList extends Component {
  state = {
    recipes: [],
    sortedRecipes: [],
  }

  componentDidMount() {
    this.setState({
      recipes: this.props.recipes.edges,
      sortedRecipes: this.props.recipes.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="our" subtitle="recipes"></Title>
        <div className={styles.center}>
          {this.state.sortedRecipes.map(({ node }) => {
            return <Recipe key={node.contentful_id} recipe={node} />
          })}
        </div>
      </section>
    )
  }
}
