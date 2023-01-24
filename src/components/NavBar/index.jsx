import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoIconCinza from '../../assets/logos/logo_icon_cinza.png';
import LogoStCinza from '../../assets/logos/logo_st_cinza.png';

import styles from './NavBar.module.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Auth } from 'aws-amplify';

const pages = ['Cardápio', 'Agendamento', 'Sobre nós', 'Contato'];
const settings = ['Perfil', 'Conta', 'Sair'];

export default function NavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = ({ page }) => {
    
    if (page === 'Cardápio') {
      navigate('/cardapio');
    }
    if (page === 'Agendamento') {
      navigate('/agendamento');
    }
    if (page === 'Sobre nós') {
      navigate('/sobrenos');
    }
    if (page === 'Contato') {
      navigate('/contato');
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = ({ setting }) => {

    if (setting === 'Perfil') {
      navigate('/perfil');
    }
    if (setting === 'Conta') {
      navigate('/conta');
    }
    if (setting === 'Sair') {
      Auth.signOut();
      navigate('/login');
    }


    setAnchorElUser(null);
  };

  return (
    <AppBar className={styles.navbar__container} sx={{backgroundColor: '#F0DB4F'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={LogoIconCinza} alt="logo" className={styles.navbar__logo} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              sx={{ color: '#2b2b2b' }}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu({ page })}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <img src={LogoStCinza} alt="logo" className={styles.navbar__logo__meio} onClick={() => navigate('/menu')} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu({ setting })}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
