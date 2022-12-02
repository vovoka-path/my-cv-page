import * as React from 'react';

import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import * as MUIcon from '@mui/icons-material';
import IconComp from '../IconComp';
import Button from '@mui/material/Button';

type CopyrightProps = {
  name: string;
  icon: keyof typeof MUIcon;
  link: string;
};

const ContactIcons = ({ name, icon, link }: CopyrightProps) => {
  return (
    <Container
      // pt={paddingTop}
      sx={{
        paddingTop: 4,
        paddingBottom: '0',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      <Box
        pr={2}
        sx={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          // flexWrap: 'wrap',
          textTransform: 'uppercase',
        }}
      >
        <Button startIcon={<IconComp icon={icon}></IconComp>} href={link} color="secondary">
          {name}
        </Button>
        {/* <IconComp icon={icon}></IconComp> */}
      </Box>
    </Container>
  );
};

export default ContactIcons;
