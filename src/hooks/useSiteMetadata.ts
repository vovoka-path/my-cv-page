import { graphql, useStaticQuery } from 'gatsby';

type Social = {
  name: string;
  link: string;
};

type SiteMetadataProps = {
  title: string;
  description: string;
  author: string;
  authorLink: string;
  siteUrl: string;
  image: string;
  social: Social[];
};

const useSiteMetadata = (): SiteMetadataProps => {
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
              name
              link
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
