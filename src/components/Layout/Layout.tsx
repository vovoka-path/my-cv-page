import React from 'react';
import '@fontsource/montserrat/latin.css';
import '@fontsource/dancing-script/latin.css';
import Theme1 from '../Theme1';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

import useElementHeightByTag from '../../hooks/useElementHeightByTag';
import Header from '../Header';
import Footer from '../Footer';
import ScrollTop from '../ScrollTop';

const printHideStyles = {
  '@media print': {
    display: 'none',
  },
};

type LayoutProps = {
  // children?: React.ReactNode;
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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '100vh',
          }}
        >
          <Header />
          <Box
            component="main"
            // disableGutters
            // maxWidth={'xl'}
            // maxWidth={false}
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
