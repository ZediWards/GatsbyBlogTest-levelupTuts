module.exports = {
  siteMetadata: {
    title: `Louie Logs :)`,
    description: `The place for Louie's adventures!`,
    author: `Zediwards`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    // new source file system is needed anytime you want a file to be a different type of node to then be queried with graphql
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify", // make sure it is last in array
  ],
}
