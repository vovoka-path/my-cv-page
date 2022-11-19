import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const text = `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`;

const ExampleText: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 2 }}>{[...new Array(42)].map(() => text).join('\n')}</Box>
    </Container>
  );
};

export default ExampleText;
