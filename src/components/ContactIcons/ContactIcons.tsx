import * as React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as MUIcon from '@mui/icons-material';

import IconComp from '../IconComp';
import Theme1 from '../Theme1';

type ContactIconsProps = {
  name: string;
  icon: keyof typeof MUIcon;
  link: string;
};

const ContactIcons = ({ name, icon, link }: ContactIconsProps) => {
  return (
    <Container
      sx={{
        paddingTop: 4,
        paddingBottom: '0',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      <Box
        px={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textTransform: 'uppercase',
          color: Theme1.palette.primary.main,
        }}
      >
        <Button
          startIcon={<IconComp icon={icon}></IconComp>}
          href={link}
          variant="outlined"
          sx={{ width: '120px' }}
        >
          {name}
        </Button>
      </Box>
    </Container>
  );
};

export default ContactIcons;
