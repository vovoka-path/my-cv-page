import React, { useState, MouseEvent } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { COLOR } from '../../data/constants';
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

const backgroundColor = 'white';

type NodeType = {
  id: string;
  name: string;
  link: string;
};

type EdgesType = {
  node: NodeType;
};

type NavProps = {
  allNavJson: {
    edges: EdgesType[];
  };
};

const NavMenu: React.FC<ViewModeProps> = ({ viewMode }) => {
  // return null;

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

  // console.log('pages', pages);
  // return null;

  // const pages: EdgesType[] = navQuery.allNavJson.edges;

  const [drawer, setDrawer] = useState<boolean>(false);

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

  const theme = useTheme();
  const styles = { backgroundColor: theme.palette.primary.main } as const;

  return (
    <>
      {{
        mobile: (
          <Box component="nav" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              // aria-label="account of current user"
              // aria-controls="menu-appbar"
              // aria-haspopup="true"
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
                sx={{ width: 250, ...styles, backgroundColor: backgroundColor }}
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
                        // fontFamily: 'monospace',
                        fontSize: '1rem',
                        // color: COLOR.LOGO,
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
                          textDecoration: `none`,
                          color: COLOR.LOGO,
                          textTransform: 'uppercase',
                          lineHeight: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                        key={page.node.id}
                        to={page.node.link}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <ArrowRightIcon sx={{ color: COLOR.LOGO }} />
                          </ListItemIcon>
                          <Typography key={page.node.id} textAlign="center">
                            {page.node.name}
                          </Typography>
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
              <Link style={{ textDecoration: `none` }} key={page.node.id} to={page.node.link}>
                <Button
                  key={page.node.id}
                  aria-label="Navigation Hamburger menu"
                  onClick={toggleDrawer(true)}
                  sx={{
                    my: 0,
                    color: COLOR.LOGO,
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textShadow: '#Fff 1px 0 10px',
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
