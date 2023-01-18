import React from 'react';

import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Copyright from '../Copyright';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import Theme1 from '../../components/Theme1';

const bgMD = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='208' preserveAspectRatio='none' viewBox='0 0 1440 208'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1067%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c61 C 144%2c83.4 432%2c180 720%2c173 C 1008%2c166 1296%2c55.4 1440%2c26L1440 208L0 208z' fill='rgba(112%2c 196%2c 246%2c 0.5)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1067'%3e%3crect width='1440' height='208' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`;
const bgSM = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1000' height='208' preserveAspectRatio='none' viewBox='0 0 1000 208'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1111%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c61 C 100%2c86.6 300%2c191.8 500%2c189 C 700%2c186.2 900%2c75.4 1000%2c47L1000 208L0 208z' fill='rgba(112%2c 196%2c 246%2c 0.5)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1111'%3e%3crect width='1000' height='208' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`;
const bgXL = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2500' height='208' preserveAspectRatio='none' viewBox='0 0 2500 208'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1116%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c11 C 250%2c41.4 750%2c160.6 1250%2c163 C 1750%2c165.4 2250%2c51 2500%2c23L2500 208L0 208z' fill='rgba(112%2c 196%2c 246%2c 0.5)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1116'%3e%3crect width='2500' height='208' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`;

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

  return (
    <footer>
      <Box
        sx={{
          px: { xs: 4, sm: 10 },
          py: { xs: 5, sm: 8 },
          backgroundImage: { sm: bgSM, md: bgMD, xl: bgXL },
        }}
      >
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
