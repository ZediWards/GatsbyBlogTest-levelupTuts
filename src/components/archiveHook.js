// /**
//  * Copied and modified from layout.js
//  */

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const POST_ARCHIVE_QUERY = graphql`
//   query BlogPostArchive {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             slug
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `

// const Archive = () => {
//   const data = useStaticQuery(POST_ARCHIVE_QUERY)

//   return (
//     <>
//       <aside>
//         <h3>Archive</h3>
//         {data.allMarkdownRemark.edges.map(edge => (
//           <li>{edge.node.frontmatter.title}</li>
//         ))}
//       </aside>
//       console.log(data.allMarkdownRemark.edges.map)
//     </>
//   )
// }

// export default Archive
