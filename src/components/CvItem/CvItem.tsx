import React from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { ItemCVProps } from '../../types/types';

const baseFont = {
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
  // console.log('paddingTop', id, paddingTop);
  // const padBottom = isSkillsCategory ? 0 : 0;
  // const titleFontVariant = isSkillsCategory ? 'subtitle2' : 'h6';
  // console.log('isSkillsCategory', isSkillsCategory);

  return (
    <Container
      // pt={paddingTop}
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
          <Box sx={{ ...baseFont, marginTop: '0', display: 'flex', justifyContent: 'start' }}>
            <Typography
              component="h4"
              // variant={'h6'}
              color={theme.palette.secondary.dark}
              sx={{ fontWeight: 600 }}
            >
              {title}
            </Typography>
          </Box>
        )}
        {subtitle && (
          <Box sx={{ ...baseFont, display: 'flex', justifyContent: 'start' }}>
            <Typography component="h5" sx={{ fontWeight: 300 }}>
              {subtitle}
            </Typography>
          </Box>
        )}
      </Box>
      {date && (
        <Box
          width={{ xs: '100%', md: 'auto' }}
          justifyContent={{ xs: 'start', md: 'end' }}
          sx={{
            display: 'flex',
            alignItems: 'start',
            fontWeight: 300,
            textTransform: 'uppercase',
          }}
        >
          <Typography
            component="p"
            // variant="h6"
            // color={theme.palette.text.hint}
            sx={{ fontWeight: '300' }}
          >
            {date}
          </Typography>
        </Box>
      )}

      {description && (
        <Box
          pt={0}
          // pb={3.5}
          sx={{
            marginTop: '1px',
            display: 'flex',
            justifyContent: 'start',
            width: '100%',
            // fontWeight: 300,
            // fontFamily: 'Montserrat',
          }}
          // fontWeight={100}
        >
          <Typography component="p" sx={{ fontWeight: '300' }} color={'rgba(51, 51, 51, 0.9)'}>
            {description}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default CvItem;
