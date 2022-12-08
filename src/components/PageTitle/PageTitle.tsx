import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Theme1 from '../Theme1';

const pageTitleStyles = {
  box: {
    my: 4,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Dancing Script',
    color: Theme1.palette.secondary.dark,
    textShadow: '1px 3px 0 #ffffff, -1px -3px 0 #ffffff',
  },
};

type PageTitleProps = {
  children: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <Box sx={pageTitleStyles.box}>
      <Typography component="h2" variant="h3" sx={pageTitleStyles.title}>
        {children}
      </Typography>
    </Box>
  );
};

export default PageTitle;
