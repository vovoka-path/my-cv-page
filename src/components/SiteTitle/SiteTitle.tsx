import React from 'react';
import { Link } from 'gatsby';

import Typography from '@mui/material/Typography';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import { COLOR } from '../../data/constants';
import { ViewModeProps } from '../../types/types';

const logoStyles = {
  base: {
    mr: 2,
    px: 1,
    fontFamily: 'Dancing Script',
    fontWeight: 500,
    fontSize: '1.9rem',
    color: '#28414b',
    textDecoration: 'none',
    textShadow: '#Fff 1px 0 10px',
    // textTransform: 'uppercase',
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
    <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
      <Typography
        component="h1"
        // variant="h5"
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
