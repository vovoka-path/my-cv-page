import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Developer Vladimir Polansky`,
    author: `Vladimir Polansky`,
    authorLink: `https://github.com/vovoka-path`,
    description: `Download CV. Open to work! In 2022 developed over 10 web applications using React, Javascript, Typescript and Node.js.`,
    siteUrl: `https://vovoka.space/`,
    gitHubAppUrl: `https://github.com/vovoka-path/my-cv-page`,
    image: `src/images/logo/vovoka-path-512px.png`,
    social: [
      { name: `Linkedin`, link: `https://www.linkedin.com/in/areawed/` },
      { name: `Github`, link: `https://github.com/vovoka-path` },
      { name: `Telegram`, link: `https://t.me/vovoka` },
      { name: `Discord`, link: `https://discordapp.com/users/919948615399665675/` },
      { name: `Twitter`, link: `https://twitter.com/HocWmVhqQoDVK9m` },
      { name: `Email`, link: `mailto:vovoka.path@gmail.com` },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Frontend developer CV`,
        short_name: `Developer CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        prefer_related_applications: true,
        icon: `src/images/logo/vovoka-circle-32px.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/logo/vovoka-path-192px.webp`,
            sizes: `192x192`,
            type: `image/webp`,
            purpose: 'any maskable',
          },
          {
            src: `src/images/logo/vovoka-path-512px.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: 'any maskable',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-fix-fouc`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://vovoka.space',
        sitemap: 'https://vovoka.space/sitemap-index.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
  ],
};

export default config;
