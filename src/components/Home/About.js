import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us"></Title>

      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="about company"
            ></Img>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>who are we</h4>
          <p>
            Our goal is not trying to reinvent the wheel or try to teach you how
            should you live your life, because in the end we are like you,
            somebody wife, sister, lover, and mommy trying to get most of what
            we have. Our goals is to share some of our success blogs stories,
            tasty and interesting recipes and lifetime experience.
          </p>

          <button type="button" className="btn-primary">
            {" "}
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
