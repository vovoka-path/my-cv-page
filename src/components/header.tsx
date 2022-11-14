import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Header() {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <h1>{site.siteMetadata.title}</h1>
    </header>
  );
}
