import React, { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import SiteTitle from '../SiteTitle';
import NavMenu from '../NavMenu';
import AvatarMenu from '../AvatarMenu';

import Theme1 from '../Theme1';

const headerStyles = {
  start: {
    position: 'static',
    backgroundColor: 'transparent',
  },
  fixed: {
    position: 'fixed',
    backgroundColor: Theme1.palette.secondary.light,
  },
};

let elevationData = 0;

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  const scrollEffect = () => {
    elevationData = window.scrollY > 60 ? 4 : 0;
    setIsFixed(window.scrollY > 60);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEffect);

    return () => {
      window.removeEventListener('scroll', scrollEffect);
    };
  }, []);

  return (
    <AppBar elevation={elevationData} sx={[isFixed ? headerStyles.fixed : headerStyles.start]}>
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
