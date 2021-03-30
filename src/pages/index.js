import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Home({ data }) {

  const image = getImage(data.file)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop and Deploy</h3>
          <p>Ux Designer and Web Developer based in the Philippines</p>
          <Link className={styles.btn} to="/projects">My portfolio projects</Link>
        </div>
        <GatsbyImage image={image} alt="site banner" />
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
       gatsbyImageData
     }
  }
}
`
