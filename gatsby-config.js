module.exports = {
  siteMetadata: {
    title: `SIS - Redesigned`,
    description: `Learning Gatsby while redesigning the SIS page.`,
    author: `Andrew Lam`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        icon: `src/images/thonk.png`, 
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
