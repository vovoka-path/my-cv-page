import * as React from 'react';
import { Link, PageProps } from 'gatsby';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Theme1 from '../components/Theme1';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import IndexPageHeroBG from '../components/IndexPageHeroBG';
import useSiteMetadata from '../hooks/useSiteMetadata';

const title = 'About me';

const textStyles = {
  title: {
    padding: '0 0 20px',
    fontWeight: 700,
    color: Theme1.palette.secondary.dark,
    textShadow: '1px 3px 0 #ffffff, -1px -3px 0 #ffffff',
  },
  subTitle: {
    padding: '0 0 20px',
    color: Theme1.palette.secondary.dark,
    textShadow: '1px 2px 0 #ffffff, -1px -2px 0 #ffffff',
  },
  text: {
    padding: '0 0 40px',
    color: Theme1.palette.secondary.contrastText,
    textShadow: '1px 1px 0 #ffffff, -1px -1px 0 #ffffff',
  },
};

const btnStyles = {
  padding: '10px',
  margin: '10px 20px 10px 0',
  minWidth: '105px',
  fontWeight: 700,
};

const IndexPage: React.FC<PageProps> = () => {
  const { author } = useSiteMetadata();

  return (
    <Layout>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Box py={{ xs: 6, md: 12 }}>
            <Typography variant="h2" sx={{ ...textStyles.title, width: { xs: '100%', md: '50%' } }}>
              My name is {author.split(' ')[0]}
            </Typography>
            <Typography variant="h3" sx={textStyles.subTitle}>
              I&apos;m frontend developer
            </Typography>
            <Typography
              variant="body1"
              sx={{ ...textStyles.text, width: { xs: '100%', md: '50%' } }}
            >
              I developed over 15 web applications in 2022 using React, Javascript, Typescript and
              Node.js. I can to deliver results within project&apos;s resources and time
              constraints.
            </Typography>
            <Box>
              <Link style={{ textDecoration: `none` }} to={'/contacts'}>
                <Button variant="outlined" sx={btnStyles} disableElevation>
                  Contacts
                </Button>
              </Link>
              <Link style={{ textDecoration: `none` }} to={'/cv'}>
                <Button variant="contained" sx={{ ...btnStyles, color: 'white' }} disableElevation>
                  CV
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
        <IndexPageHeroBG />
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO title={`${useSiteMetadata().title}: ${title}`} />;
