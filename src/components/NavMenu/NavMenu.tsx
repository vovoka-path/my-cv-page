import React, { useState, MouseEvent } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Logo from '../../components/Logo';
import { ViewModeProps } from '../../types/types';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Avatar,
  Container,
} from '@mui/material';
import Theme1 from '../Theme1';

const linkStyles = {
  color: Theme1.palette.secondary.dark,
  textDecoration: `none`,
  fontWeight: 700,
  textAlign: 'left',
  padding: 0,
  minWidth: 'auto',
} as const;

type NodeType = {
  id: string;
  name: string;
  link: string;
};

type EdgesType = {
  node: NodeType;
};

const NavMenu: React.FC<ViewModeProps> = ({ viewMode }) => {
  const [drawer, setDrawer] = useState<boolean>(false);

  const pages: EdgesType[] = useStaticQuery(graphql`
    query NavQuery {
      allNavJson {
        edges {
          node {
            id
            name
            link
          }
        }
      }
    }
  `).allNavJson.edges;

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | MouseEvent<HTMLElement>) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDrawer(isOpen);
    };

  return (
    <>
      {{
        mobile: (
          <Box component="nav" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="Navigation Hamburger menu"
              size="large"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor={'left'}
              open={drawer}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <Box
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                sx={{
                  width: 250,
                }}
              >
                <Container maxWidth="xl">
                  <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Avatar>
                      <Logo size={40} />
                    </Avatar>
                    <Typography
                      component="h2"
                      variant="h5"
                      sx={{
                        fontSize: '1rem',
                        color: Theme1.palette.secondary.contrastText,
                      }}
                    >
                      Get to know me!
                    </Typography>
                  </Toolbar>
                </Container>
                <Divider />
                <List>
                  {pages.map((page) => (
                    <ListItem key={page.node.id} disablePadding>
                      <Link
                        style={{
                          width: '100%',
                          textDecoration: `none`,
                          textTransform: 'uppercase',
                          lineHeight: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                        activeStyle={{ textDecoration: `underline 2px dotted` }}
                        key={page.node.id}
                        to={page.node.link}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <ArrowRightIcon sx={{ color: Theme1.palette.secondary.dark }} />
                          </ListItemIcon>
                          <Button key={page.node.id} sx={linkStyles}>
                            {page.node.name}
                          </Button>
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </SwipeableDrawer>
          </Box>
        ),
        desktop: (
          <Box component="nav" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                key={page.node.id}
                to={page.node.link}
                style={{ ...linkStyles }}
                activeStyle={{
                  textDecoration: `underline 2px dotted`,
                }}
              >
                <Button
                  key={page.node.id}
                  sx={{
                    my: 0,
                    color: 'inherit',
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  {page.node.name}
                </Button>
              </Link>
            ))}
          </Box>
        ),
      }[viewMode] || <h3>viewMode = {viewMode}</h3>}
    </>
  );
};

export default NavMenu;
