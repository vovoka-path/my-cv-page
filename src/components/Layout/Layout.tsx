import React from 'react';

import { StyledEngineProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Container from '@mui/material/Container';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

import { TO_TOP_ANCHOR } from '../../data/constants';
import Header from '../Header';
import Footer from '../Footer';
import ScrollTop from '../ScrollTop';

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

function ExampleText() {
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        {[...new Array(42)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
      Cras justo odio, dapibus ac facilisis in, egestas eget quam.
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </Box>
    </Container>
  );
}
