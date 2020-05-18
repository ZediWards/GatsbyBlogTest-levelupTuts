module.exports = {
  siteMetadata: {
    title: `Louie Logs :)`,
    description: `The place for Louie's adventures!`,
    author: `Zediwards`,
    // production url for /sitemap.xml
    siteUrl: "https://musing-kowalevski-ebd946.netlify.app/",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // info used to save web site as a PWA on mobile
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Louie Logs`,
        short_name: `Louie`,
        start_url: `/`,
        background_color: `#524763`,
        theme_color: `#524763`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline (cached version of site via service worker)
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
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify", // make sure it is last in array
  ],
}
