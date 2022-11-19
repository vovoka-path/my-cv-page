import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My CV`,
    author: `Vladimir Polansky`,
    authorLink: `https://vovoka.space`,
    description: `I'm frontend developer. Open to work!`,
    siteUrl: `https://vovoka.space`,
    image: `/images/icon/android-chrome-256x256.png`,
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
        name: `My CV`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/vovoka-circle-1.png`, // This path is relative to the root of the site.
      },
    },
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
  ],
};

export default config;
