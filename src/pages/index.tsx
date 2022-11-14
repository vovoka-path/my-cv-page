import * as React from 'react';
import { PageProps } from 'gatsby';
import { SEO } from '../components/seo';
import Header from '../components/header';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const IndexPage: React.FC<PageProps> = () => {
  const { author } = useSiteMetadata();

  return (
    <main>
      <Header />
      <h2>My name is {author}</h2>
    </main>
  );
};

export default IndexPage;

export const Head = () => <SEO title={useSiteMetadata().title} />;
