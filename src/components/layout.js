/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Spring } from "react-spring/renderprops"

import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Archive from "./archive"
import "./layout.css"

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`
//passing in the page location through props
const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    // <></> is called a React fragment.
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
        siteAuthor={data.site.siteMetadata.author}
      />
      {/* Spring is a react component that animates from one value to another */}
      <Spring
        // if on homepage then from=200 if not then from=400. vice versa
        from={{ height: location.pathname === "/" ? 200 : 400 }}
        to={{ height: location.pathname === "/" ? 400 : 200 }}
      >
        {styles => (
          <div style={{ overflow: "hidden", ...styles }}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )}
      </Spring>
      {/* commented out below to turn into ternary logic above */}
      {/* the layout component unmounts and mounts on page load everytime in Gatsby, animation will be jumpy when going from non homepage to non homepage, one of Gatsby's downfalls */}

      {/* {location.pathname === '/' && (
          
        )} */}
      <MainLayout>
        <div>{children}</div>
        <Archive />
      </MainLayout>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// defualt value for location for build process error
Layout.defaultProps = {
  location: {},
}
export default Layout
