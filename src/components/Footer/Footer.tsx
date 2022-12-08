import React from 'react';

import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Copyright from '../Copyright';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import Theme1 from '../../components/Theme1';

const textStyles = {
  text: {
    my: 2,
    mx: 'auto',
    color: Theme1.palette.secondary.dark,
    textShadow: '1px 1px 0 #ffffff, -1px -1px 0 #ffffff',
  },
};

const Footer: React.FC = () => {
  const { author, authorLink, gitHubAppUrl } = useSiteMetadata();
  const authorNoWrap = author.split(' ').join(' ');

  console.log('authorLink', authorLink);

  return (
    <footer>
      <Box px={{ xs: 4, sm: 10 }} py={{ xs: 5, sm: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center" sx={textStyles.text}>
            This app was created using <strong>React, Gatsby, Typescript, Material UI</strong>.
            Source code:{' '}
            <MuiLink color="inherit" href={gitHubAppUrl} target="_blank">
              <strong>Github</strong>
            </MuiLink>
          </Typography>
          <Copyright author={authorNoWrap} authorLink={authorLink} />
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
