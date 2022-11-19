import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import { COLOR } from '../../data/constants';
import Logo from '../Logo';

const AvatarMenu: React.FC = () => {
  const { social } = useSiteMetadata();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar>
            <Logo size="40px" />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {social.map((page) => (
          <MenuItem key={page.name} sx={{ width: '160px', justifyContent: 'flex-end' }}>
            <a
              style={{
                textDecoration: `none`,
                color: COLOR.LOGO,
                display: 'flex',
                justifyContent: 'center',
              }}
              key={page.name}
              href={page.link}
              target="_blank"
              rel="noreferrer"
            >
              <Typography key={page.name} textAlign="center" sx={{ textTransform: 'uppercase' }}>
                {page.name}
              </Typography>
              <SendRoundedIcon fontSize="medium" sx={{ color: COLOR.LOGO, padding: '0 0.5rem' }} />
            </a>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AvatarMenu;
