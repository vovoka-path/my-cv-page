import React, { useState, MouseEvent } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import type { GatsbyLinkProps } from 'gatsby';
import type { PageProps } from 'gatsby';

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
import Theme1 from '../Theme1';

const backgroundColor = 'white';

// type IsAciveProps = {
//   isCurrent: boolean;
// };

// const isActive = ({ isCurrent }: IsAciveProps) => {
//   return isCurrent ? { className: 'active' } : {};
// };

// const NavLink: React.FC<GatsbyLinkProps<TState>> = ({
//   children,
//   ...props
// }: React.PropsWithoutRef<GatsbyLinkProps<TState>>) => (
//   <Link<TState> getProps={isActive} {...props}>
//     {children}
//   </TState>
// );

const linkStyles = {
  color: Theme1.palette.secondary.dark,
  textDecoration: `none`,
  // fontSize: '0.8rem',
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

type NavProps = {
  allNavJson: {
    edges: EdgesType[];
  };
};

const NavMenu: React.FC<ViewModeProps> = ({ viewMode }) => {
  // return null;
  const [drawer, setDrawer] = useState<boolean>(false);
  const theme = useTheme();

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
                sx={{
                  width: 250,
                  // backgroundColor: theme.palette.primary.main,
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
                          // color: Theme1.palette.secondary.dark,
                          textTransform: 'uppercase',
                          lineHeight: '100%',
                          // fontWeight: 700,
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
                style={{ ...linkStyles }}
                key={page.node.id}
                to={page.node.link}
                activeStyle={{
                  // color: Theme1.palette.secondary.main,
                  textDecoration: `underline 2px dotted`,
                }}
              >
                <Button
                  key={page.node.id}
                  // onClick={toggleDrawer(true)}
                  sx={{
                    my: 0,
                    // color: Theme1.palette.secondary.contrastText,
                    color: 'inherit',
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    // textShadow: '#Fff 1px 0 10px',
                    // textShadow: '1px 1px 0 #ffffff, -1px -1px 0 #ffffff',
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
