import React from 'react';

import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

import { TO_TOP_ANCHOR } from '../../data/constants';
import Header from '../Header';
import Footer from '../Footer';
import ScrollTop from '../ScrollTop';
import ExampleText from '../ExampleText';

type LayoutProps = {
  location?: Location;
  title?: string;
  window?: () => Window;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { window, children } = props;

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
      <main id={TO_TOP_ANCHOR}>{children}</main>
      <ExampleText />
      <ScrollTop {...{ window, children }}>
        <Fab size="small" aria-label="scroll back to top">
          <ArrowUpwardRoundedIcon />
        </Fab>
      </ScrollTop>
      <Footer />
    </StyledEngineProvider>
  );
};

export default Layout;
