import React from 'react';
import Box from '@mui/material/Box';
import Theme1 from '../Theme1';

const containerStyles = {
  top: '0',
  right: '0',
  width: '55%',
  position: 'absolute',
  zIndex: '-100',
};

const subContainerStyles = {
  width: '100%',
  backgroundImage: 'linear-gradient(30deg, #2196F3 50%, #FF9800 140%)',
};

const imgOneStyles = {
  top: '0px',
  left: '-1px',
  width: '100%',
  height: '99%',
  position: 'absolute',
  transform: 'none',
  background:
    'url(data:image/png;base64,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) no-repeat 0 0',
  backgroundSize: '100% 720px',
  backgroundColor: Theme1.palette.secondary.light,
};

const PagesBG = () => {
  return (
    <Box component="div" sx={containerStyles} height="260px">
      <Box component="div" sx={subContainerStyles}>
        <Box
          component="div"
          sx={{
            ...imgOneStyles,
            backgroundSize: '100% 260px',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default PagesBG;
