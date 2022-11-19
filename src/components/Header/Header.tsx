import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import SiteTitle from '../SiteTitle';
import NavMenu from '../NavMenu';
import AvatarMenu from '../AvatarMenu';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavMenu viewMode="desktop" />
          <SiteTitle viewMode="desktop" />
          <NavMenu viewMode="mobile" />
          <SiteTitle viewMode="mobile" />
          <AvatarMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

{
  /* <SiteTitle viewMode="desktop" />
<NavMenu viewMode="mobile" />
<SiteTitle viewMode="mobile" />
<NavMenu viewMode="desktop" /> */
}
