import * as React from 'react';
import { PageProps } from 'gatsby';
import * as MUIcon from '@mui/icons-material';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';
import ContactIcons from '../components/ContactIcons';
import contacts from '../data/contacts.json';

const title = 'Contacts';

const ContactsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <PageTitle>{title}</PageTitle>
        <Container
          maxWidth="sm"
          sx={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {contacts.map((contact) => (
            <Box key={contact.name} width={{ xs: '50%', md: '33%' }}>
              <ContactIcons
                name={contact.name}
                icon={contact.icon as keyof typeof MUIcon}
                link={contact.link}
              />
            </Box>
          ))}
        </Container>
      </Container>
    </Layout>
  );
};

export default ContactsPage;

export const Head = () => <SEO title={title} />;
