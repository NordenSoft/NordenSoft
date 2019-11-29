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
        name: `gatsby-starter-default`,
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
        token: 'skIYikgWZifK6UkuJsz8j0RU2UcCPtf2vr0spsjBwwyYzcih28t2JBnpcVSks47wyYtsqBRnCMm8PV7kDfXjiAqVT9FolfnT6WYnKTsrO2IFwP3ztZrUpLS22ijrWzwO7NwL2vsgrmO88GkXI6aJcPGRhWOVnfxhasW8BejVdnbbSbPJuhL3',//process.env.MY_SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      },
    },
  ],
}
