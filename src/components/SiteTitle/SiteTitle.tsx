import React from 'react';
import { Link } from 'gatsby';

import Typography from '@mui/material/Typography';

import { useSiteMetadata } from '../../hooks/use-site-metadata';
import { COLOR } from '../../data/constants';
import { ViewModeProps } from '../../types/types';

const logoStyle = {
  base: {
    mr: 2,
    fontFamily: 'monospace',
    fontWeight: 700,
    fontSize: '1rem',
    color: COLOR.LOGO,
    textDecoration: 'none',
  },
  mobile: {
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
  },
  desktop: {
    display: { xs: 'none', md: 'flex' },
  },
};

const SiteTitle: React.FC<ViewModeProps> = ({ viewMode }) => {
  const { author } = useSiteMetadata();

  return (
    <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
      <Typography
        component="h1"
        variant="h5"
        noWrap
        sx={{
          ...logoStyle.base,
          ...logoStyle[viewMode],
        }}
      >
        {author}
      </Typography>
    </Link>
  );
};

export default SiteTitle;
