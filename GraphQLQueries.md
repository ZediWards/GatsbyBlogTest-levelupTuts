## At the end of the markdown video.

```
query SiteTitleQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark {
    totalCount
    edges {
      node {
        html
        excerpt
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
```
