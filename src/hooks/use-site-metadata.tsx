import { graphql, useStaticQuery } from 'gatsby';

type Social = {
  twitter: string;
  linkedin: string;
  github: string;
  telegram: string;
};

type SiteMetadataProps = {
  title: string;
  description: string;
  author: string;
  authorLink: string;
  siteUrl: string;
  image: string;
  social: Social;
};

export const useSiteMetadata = (): SiteMetadataProps => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            authorLink
            siteUrl
            image
            social {
              twitter
              linkedin
              github
              telegram
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};
