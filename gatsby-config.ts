require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Тепло на передову`,
    siteUrl: `https://www.teplonaperedovu.com.ua`
  },
  pathPrefix: "/teplo",
  graphqlTypegen: true,
  plugins: [`gatsby-plugin-styled-components`, "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
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
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "700"],
            },
            {
              family: "Exo 2",
              variants: ["400", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-env-variables",
      options: {
        allowList: ["REACT_APP_BASE_URL"],
      },
    },
  ],
};

export default config;
