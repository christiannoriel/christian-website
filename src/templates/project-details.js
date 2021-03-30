import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'

function ProjectDetails({ data }) {

  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="project image" />
          <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectDetailsPage($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      slug
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`

export default ProjectDetails
