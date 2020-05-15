import React from "react"
import { Section, styles } from "../../utils"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const query = graphql`
  {
    allContentfulProject(sort: { fields: dateCreated, order: DESC }) {
      edges {
        node {
          contentful_id
          dateCreated(formatString: "MMMM, YYYY")
          description {
            description
          }
          title
          url
          githubUrl
          techUsed {
            fixed(height: 50) {
              ...GatsbyContentfulFixed_noBase64
            }
          }
          screenshot {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
  const { allContentfulProject: data } = useStaticQuery(query)
  return (
    <Section>
      <ProjectWrapper>
        <h1 className="projects-banner">Notable Projects</h1>
        {data.edges.map(({ node }) => {
          return (
            <div key={node.contentful_id} className="project">
              <h2 className="title">{node.title}</h2>
              <h3 className="date">{node.dateCreated}</h3>
              <div className="container">
                <Img className="image" fluid={node.screenshot.fluid} />
                <p className="description">{node.description.description}</p>
              </div>
              {node.techUsed.map((item, index) => {
                return <Img key={index} className="tech" fixed={item.fixed} />
              })}
              <br />
              <a
                className="btn-link"
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
              <a
                className="btn-link"
                href={node.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          )
        })}
      </ProjectWrapper>
    </Section>
  )
}

export default Projects

const ProjectWrapper = styled.div`
  .projects-banner {
    font-size: 3rem;
  }
  .project {
    padding: 1rem;
    border-radius: 3px;
    margin: 2rem 0;
    background: ${styles.colors.mainWhite};
  }
  .title {
    font-size: 2rem;
    margin: 0 0 1rem 0;
  }
  .description {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  .tech {
    margin: 1.5rem 1rem 0 0;
  }
  .btn-link {
    display: inline-block;
    text-decoration: none;
    color: ${styles.colors.mainBlack};
    padding: 1rem 1.5rem;
    cursor: pointer;
    ${styles.transition1};
    border: 2px solid ${styles.colors.mainBlack};
    margin: 1rem 1rem 0 0;
    font-size: 1.5rem;
    text-transform: uppercase;
    &:hover {
      background: ${styles.colors.mainDarkGrey};
      color: ${styles.colors.mainLime};
    }
  }
  .date {
    margin-bottom: 1rem;
  }
  .image {
    width: 256px;
    height: auto;
  }
  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-column-gap: 1rem;
    }
    .description {
      margin-top: 0;
    }
    .image {
      width: 500px;
      height: auto;
    }
  }
`
