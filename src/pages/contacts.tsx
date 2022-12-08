import * as React from 'react';
import { PageProps } from 'gatsby';
import * as MUIcon from '@mui/icons-material';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactIcons from '../components/ContactIcons';
import contacts from '../data/contacts.json';
import useSiteMetadata from '../hooks/useSiteMetadata';
import PagesBG from '../components/PagesBG';
import Theme1 from '../components/Theme1';

const title = 'Contacts';

const containerStyles = {
  my: 4,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  fontWeight: 700,
};

const textStyles = {
  title: {
    my: 4,
    mx: 'auto',
    px: 4,
    fontWeight: 700,
    color: Theme1.palette.secondary.dark,
    textShadow: '1px 3px 0 #ffffff, -1px -3px 0 #ffffff',
  },
  text: {
    my: 4,
    mx: 'auto',
    px: 4,
    color: Theme1.palette.secondary.contrastText,
    textShadow: '1px 1px 0 #ffffff, -1px -1px 0 #ffffff',
  },
};

const ContactsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ ...containerStyles, py: { xs: 6, md: 14 }, flexDirection: 'column' }}>
          <Typography variant="h2" sx={{ ...textStyles.title }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={textStyles.text}>
            If you have any questions, please feel free to drop me a line.
          </Typography>
          <Container maxWidth="sm" sx={containerStyles}>
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
        </Box>
      </Container>
      <PagesBG />
    </Layout>
  );
};

export default ContactsPage;

export const Head = () => <SEO title={`${useSiteMetadata().title}: ${title}`} />;
