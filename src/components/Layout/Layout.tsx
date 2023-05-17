import React from 'react';
// import '@fontsource/montserrat/latin.css';
// import '@fontsource/dancing-script/latin.css';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

import Theme1 from '../Theme1';
import useElementHeightByTag from '../../hooks/useElementHeightByTag';
import Header from '../Header';
import Footer from '../Footer';
import ScrollTop from '../ScrollTop';

const bgStyles = {
  backgroundImage: `url(
    "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2370c4f6' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E"
  )`,
  backgroundAttachment: 'fixed',
};

type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  const heightHeader = useElementHeightByTag('header');
  const heightFooter = useElementHeightByTag('footer');

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme1}>
        <CssBaseline />
        <Box
          sx={[
            { ...bgStyles },
            {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '100vh',
            },
          ]}
        >
          <Header />
          <Box
            component="main"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              minHeight: `calc(100vh - (${heightHeader}px + ${heightFooter}px))`,
            }}
          >
            {children}
            <ScrollTop {...props}>
              <Fab size="small" aria-label="scroll back to top" sx={{ opacity: 0.8 }}>
                <ArrowUpwardRoundedIcon />
              </Fab>
            </ScrollTop>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Layout;
