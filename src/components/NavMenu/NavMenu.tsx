import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { COLOR } from '../../data/constants';
import { ViewModeProps } from '../../types/types';

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
  const navQuery: NavProps = useStaticQuery(graphql`
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
  `);
  const pages: EdgesType[] = navQuery.allNavJson.edges;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {{
        mobile: (
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page: EdgesType) => (
                <MenuItem key={page.node.id}>
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
                    <ArrowRightIcon sx={{ color: COLOR.LOGO }} />
                    <Typography key={page.node.id} textAlign="center">
                      {page.node.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ),
        desktop: (
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                style={{ textDecoration: `none`, color: `white` }}
                key={page.node.id}
                to={page.node.link}
              >
                <Button
                  key={page.node.id}
                  onClick={() => handleCloseNavMenu()}
                  sx={{ my: 2, color: 'white', display: 'block' }}
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
