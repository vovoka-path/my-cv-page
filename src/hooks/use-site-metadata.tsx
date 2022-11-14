import { graphql, useStaticQuery } from 'gatsby';

type Social = {
  twitter: string;
};

type SiteMetadataProps = {
  title: string;
  description: string;
  author: string;
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
            siteUrl
            image
            social {
              twitter
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};
