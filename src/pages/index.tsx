import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useSiteMetadata } from '../hooks/use-site-metadata';
// import VovokaIcon from '../images/VovokaIcon';

const IndexPage: React.FC<PageProps> = () => {
  const { author } = useSiteMetadata();

  return (
    <Layout>
      <h2>My name is {author}</h2>
      {/* <VovokaIcon /> */}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO title={useSiteMetadata().title} />;
