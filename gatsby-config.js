module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Comfortaa']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nordensoft`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'wzscd3fa',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        token: 'skLuXyFwLnvlV7RGW74wtPyoweRTy9JFfEdJwEXc8BittXTFmC4W27v03c0g2S6i9hp6XoBFC9a9tgoL7ummcYfJ8e7Mh9YDMdPjk3OQTLBPBfPFPQWO9nU2DOdyjoiaJMjbGq632BoVe6ShK3ZfR4ErZDXcoRbQk97athYuh6Xjd4HHzsWS',//process.env.MY_SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      },
    },
  ],
}
