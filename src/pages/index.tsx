import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

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
  common: {
    width: { xs: '100%', md: '50%' },
  },
  title: {
    padding: '0 0 24px',
    fontWeight: 700,
    color: Theme1.palette.secondary.dark,
    textShadow: '1px 3px 0 #ffffff, -1px -3px 0 #ffffff',
  },
  subTitle: {
    padding: '0 0 24px',
    color: Theme1.palette.secondary.dark,
    textShadow: '1px 2px 0 #ffffff, -1px -2px 0 #ffffff',
  },
  text: {
    padding: '0 0 24px',
    color: Theme1.palette.secondary.contrastText,
    textShadow: '1px 1px 0 #ffffff, -1px -1px 0 #ffffff',
  },
};

const linkStyles = {
  textDecoration: 'none',
};

const btnStyles = {
  padding: '10px',
  margin: '10px 20px 10px 0',
  minWidth: '105px',
  fontWeight: 700,
  color: Theme1.palette.secondary.contrastText,
  textShadow: '1px 1px 0 #ffffff, -1px -1px 0 #ffffff',
};

const heroImgStyles = {
  alignItem: 'right',
  // paddingTop: 6,
  borderRadius: '50%',
  borderBottom: '18px solid #FF9800',
};

const IndexPage: React.FC<PageProps> = () => {
  const { author } = useSiteMetadata();

  return (
    <Layout>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Box
            sx={{
              mt: { xs: 6, md: 6 },
              mb: { xs: 2, md: 1 },
              width: { xs: 196, sm: 256 },
              height: { xs: 196, sm: 256 },
            }}
          >
            <StaticImage
              src="../images/VP_transparent.png"
              alt="Frontend developer photo"
              placeholder="none"
              layout="constrained"
              imgStyle={heroImgStyles}
              // width={{ xs: 196, sm: 256 }}
              // height={{ xs: 196, sm: 256 }}
            />
          </Box>
          <Box py={{ xs: 2, md: 2 }}>
            <Typography variant="h2" sx={{ ...textStyles.common, ...textStyles.title }}>
              My name is {author.split(' ')[0]}
            </Typography>
            <Typography variant="h3" sx={{ ...textStyles.common, ...textStyles.subTitle }}>
              Frontend developer
            </Typography>
            <Typography variant="body1" sx={{ ...textStyles.common, ...textStyles.text }}>
              Developed over 10 web applications in 2022 using React, Typescript/Javascript and
              Node.js. Open to relocation or remote work.
            </Typography>
            <Box>
              <Link style={linkStyles} to={'/cv'}>
                <Button variant="contained" sx={btnStyles} disableElevation>
                  CV
                </Button>
              </Link>
              <Link style={linkStyles} to={'/contacts'}>
                <Button variant="outlined" sx={btnStyles} disableElevation>
                  Contacts
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
