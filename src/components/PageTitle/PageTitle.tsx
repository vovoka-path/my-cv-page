import React from 'react';
import { Link } from 'gatsby';

import Typography from '@mui/material/Typography';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import { COLOR } from '../../data/constants';
import { ViewModeProps } from '../../types/types';
import Box from '@mui/material/Box';

const pageTitleStyles = {
  box: {
    my: 4,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Dancing Script',
    fontWeight: 500,
    // fontSize: '1.9rem',
    // color: '#28414b',
    // textDecoration: 'none',
    textShadow: '#Fff 1px 0 10px',
    // textTransform: 'uppercase',
  },
};

type PageTitleProps = {
  children: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <Box sx={pageTitleStyles.box}>
      <Typography component="h2" variant="h2" sx={pageTitleStyles.title}>
        {children}
      </Typography>
    </Box>
  );
};

export default PageTitle;
