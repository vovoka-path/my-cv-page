import React from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CategoryCVProps } from '../../types/types';

const lineStyle = '1px dotted';

const CvCategory: React.FC<CategoryCVProps> = ({ category }) => {
  const theme = useTheme();
  // console.log('category', category);

  return (
    <Box
      py={{ xs: 2, sm: 0 }}
      px={{ xs: 2, sm: 7 }}
      // pr={{ xs: 0, sm: '10%' }}
      width={{ xs: '100%', sm: '30%' }}
      justifyContent={{ xs: 'left', sm: 'right' }}
      borderRight={{ xs: 'none', sm: lineStyle }}
      borderTop={{ xs: lineStyle, sm: 'none' }}
      sx={{ display: 'flex', lineHeight: 1.2, textTransform: 'uppercase' }}
      // key={id}
    >
      <Typography
        component="h3"
        color={{
          xs: theme.palette.secondary.contrastText,
          sm: theme.palette.secondary.contrastText,
        }}
        sx={{ fontWeight: 600 }}
      >
        {category}
      </Typography>
    </Box>
  );
};

export default CvCategory;
