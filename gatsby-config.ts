import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `teplo front`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: ["YOUR_GOOGLE_ANALYTICS_TRACKING_ID"],
   
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `admin`,
      path: `${__dirname}/src/admin/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `login`,
      path: `${__dirname}/src/admin/components/Login`,
    },
  },
  ],
};

export default config;
