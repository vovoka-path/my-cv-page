import React from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { ItemCVProps } from '../../types/types';

const baseFontStyles = {
  marginTop: '-4px',
  fontSize: 1.5,
  lineHeight: 1.2,
};

const CvItem: React.FC<ItemCVProps> = (itemData) => {
  const { title, subtitle, date, description, id } = itemData;
  const theme = useTheme();

  const isSingleField = +!!title + +!!subtitle + +!!date + +!!description === 1;
  const isFirstChild = !id;
  const paddingTop = isSingleField || isFirstChild ? '0' : '2rem';

  return (
    <Container
      sx={{
        paddingTop: paddingTop,
        paddingBottom: '0',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <Box
        pr={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          flexWrap: 'wrap',
          textTransform: 'uppercase',
        }}
      >
        {title && (
          <Box sx={{ ...baseFontStyles, marginTop: '0', display: 'flex', justifyContent: 'start' }}>
            <Typography
              component="h4"
              sx={{ color: theme.palette.secondary.dark, fontWeight: 600 }}
            >
              {title}
            </Typography>
          </Box>
        )}
        {subtitle && (
          <Box sx={{ ...baseFontStyles, display: 'flex', justifyContent: 'start' }}>
            <Typography component="h5" sx={{ fontWeight: 300 }}>
              {subtitle}
            </Typography>
          </Box>
        )}
      </Box>
      {date && (
        <Box
          sx={{
            display: 'flex',
            width: { xs: '100%', md: 'auto' },
            justifyContent: { xs: 'start', md: 'end' },
            alignItems: 'start',
            fontWeight: 300,
            textTransform: 'uppercase',
          }}
        >
          <Typography component="p" sx={{ fontWeight: '300' }}>
            {date}
          </Typography>
        </Box>
      )}

      {description && (
        <Box
          sx={{
            pt: 0,
            marginTop: '1px',
            width: '100%',
            display: 'flex',
            justifyContent: 'start',
          }}
        >
          <Typography component="p" sx={{ fontWeight: '300', color: 'rgba(51, 51, 51, 0.9)' }}>
            {description}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default CvItem;
