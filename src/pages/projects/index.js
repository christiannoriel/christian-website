import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

function Projects({ data }) {

  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and Websites I've created</h3>
        <div className={styles.projects}>
          {
            projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt="project image" />
                <div>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            ))
          }
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
query ProjectPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        title
        stack
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`

export default Projects
