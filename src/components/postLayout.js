import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data // destructuring from the data query
    const { location } = this.props
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          //vvvv a react thing that could be a security issue but not in this case
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}
// passing a parameter ($slug) into our PostQuery from context in our gatsby-node file and setting it to our PostQuery slug eq:
// PostQuery will be looking for a slug (matching what is passed in the context in the gatsby-node file) that is a string then passes it into eq:
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
