import React from 'react';
import useSiteMetadata from '../../hooks/useSiteMetadata';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Copyright from '../Copyright';

const Footer: React.FC = () => {
  const { author, authorLink } = useSiteMetadata();
  const authorNoWrap = author.split(' ').join(' ');

  return (
    <footer>
      <Box px={{ xs: 4, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth="lg">
          <Copyright author={authorNoWrap} authorLink={authorLink} />
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
