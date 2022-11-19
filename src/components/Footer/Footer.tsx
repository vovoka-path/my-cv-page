import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Copyright from '../Copyright';

const Footer: React.FC = () => {
  const { author, authorLink } = useSiteMetadata();

  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth="lg">
          <Copyright author={author} authorLink={authorLink} />
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
