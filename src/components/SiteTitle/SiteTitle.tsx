import React from 'react';
import { Link } from 'gatsby';

import Typography from '@mui/material/Typography';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import { ViewModeProps } from '../../types/types';
import Theme1 from '../Theme1';

const logoStyles = {
  base: {
    mr: 2,
    px: 1,
    fontFamily: 'Dancing Script',
    fontWeight: 500,
    fontSize: '1.9rem',
    color: Theme1.palette.secondary.dark,
    textDecoration: 'none',
    textShadow: '#Fff 1px 0 10px',
  },
  mobile: {
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    fontSize: { xs: '1.3rem' },
  },
  desktop: {
    display: { xs: 'none', md: 'flex' },
  },
};

const SiteTitle: React.FC<ViewModeProps> = ({ viewMode }) => {
  const { author } = useSiteMetadata();

  return (
    <Link style={{ textDecoration: 'none', color: 'white' }} to="/" aria-label="Logo">
      <Typography
        component="h1"
        noWrap
        sx={{
          ...logoStyles.base,
          ...logoStyles[viewMode],
        }}
      >
        {author}
      </Typography>
    </Link>
  );
};

export default SiteTitle;
