import React, { useState, MouseEvent } from 'react';
import useSiteMetadata from '../../hooks/useSiteMetadata';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import Logo from '../Logo';
import StyledBadge from '../StyledBadge';
import { Container } from '@mui/material';
import Theme1 from '../Theme1';

const AvatarMenu: React.FC = () => {
  const [isInvisible, setIsInvisible] = useState<boolean>(false);
  const { social } = useSiteMetadata();

  type TransitionProps = Omit<SlideProps, 'direction'>;

  function TransitionRight(props: TransitionProps) {
    return <Slide direction="right" {...props} />;
  }

  const [open, setOpen] = useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick = (Transition: React.ComponentType<TransitionProps>) => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    setIsInvisible(true);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    // console.log('handleCloseUserMenu=', TransitionRight);
    handleClick(TransitionRight);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Contact me now!" arrow followCursor>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <StyledBadge
            invisible={isInvisible}
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar>
              <Logo size={40} />
            </Avatar>
          </StyledBadge>
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
                color: Theme1.palette.secondary.dark,
                display: 'flex',
                justifyContent: 'center',
              }}
              key={page.name}
              aria-label={page.name}
              href={page.link}
              target="_blank"
              rel="noreferrer"
            >
              <Typography key={page.name} textAlign="center" sx={{ textTransform: 'uppercase' }}>
                {page.name}
              </Typography>
              <SendRoundedIcon
                fontSize="medium"
                sx={{ color: Theme1.palette.secondary.dark, padding: '0 0.5rem' }}
              />
            </a>
          </MenuItem>
        ))}
      </Menu>
      <Container>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={3000}
          transitionDuration={{ appear: 700, enter: 1000, exit: 700 }}
          TransitionComponent={transition}
          onClose={handleClose}
          // message="I hope We have a nice conversation soon!"
          key={transition ? transition.name : ''}
          sx={{ marginTop: '3.2rem' }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            I love good conversation!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default AvatarMenu;
