import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import VovokaIcon from '../images/VovokaIcon';

const title = 'Contacts';

const ContactsPage: React.FC<PageProps> = () => {
  // const { author } = useSiteMetadata();

  return (
    <Layout>
      <h2>{title}</h2>
    </Layout>
  );
};

export default ContactsPage;

export const Head = () => <SEO title={title} />;
