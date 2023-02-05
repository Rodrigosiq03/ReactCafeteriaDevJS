import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoIconCinza from '../../assets/logos/logo_icon_cinza.png';
import LogoStCinza from '../../assets/logos/logo_st_cinza.png';

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
import AdbIcon from '@mui/icons-material/Adb';


import { Button } from '@mui/material';
import { LogoLeftNavbar } from '../../styledComponents/LogoLeftNavbar';
import { LogoMiddleNavBar } from '../../styledComponents/LogoMiddleNavBar';

const pagesNoAuth = ['Login', 'Registro', 'Sobre nós', 'Contato'];
const settingsNoAuth = ['Login', 'Registro'];


export default function NotAuthNavBar() {
  // const navigate = useNavigate();
  // const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  // const handleOpenNavMenu = (event: any) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: any) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = ({ page }: any) => {
    
  //   if (page === 'Cardápio') {
  //     navigate('/cardapio');
  //   }
  //   if (page === 'Agendamento') {
  //     navigate('/agendamento');
  //   }
  //   if (page === 'Sobre nós') {
  //     navigate('/sobre-nos');
  //   }
  //   if (page === 'Contato') {
  //     navigate('/contato');
  //   }
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = ({ setting }: any) => {

  //   if (setting === 'Perfil') {
  //     navigate('/perfil');
  //   }
  //   if (setting === 'Conta') {
  //     navigate('/conta');
  //   }
  //   if (setting === 'Sair') {
  //     Auth.signOut();
  //     navigate('/login');
  //   }


  //   setAnchorElUser(null);
  // };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    // <AppBar sx={{backgroundColor: '#F0DB4F'}} position="static">
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <img src={LogoIconCinza} alt="logo" className={styles.navbar__logo} />

    //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //         <IconButton
    //           size="large"
    //           sx={{ color: '#2b2b2b' }}
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left',
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' },
    //           }}
    //         >
    //           { isAuth && pagesAuth.map((page) => (
    //             <MenuItem key={page} onClick={() => handleCloseNavMenu({ page })}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //           { !isAuth && pagesNoAuth.map((page) => (
    //             <MenuItem key={page} onClick={() => handleCloseNavMenu({ page })}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
          
    //       <img src={LogoStCinza} alt="logo" className={styles.navbar__logo__meio} onClick={() => navigate('/menu')} />

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    //           </IconButton>
    //         </Tooltip>
    //         <Menu
    //           sx={{ mt: '45px' }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         >
    //           { isAuth && settingsAuth.map((setting) => (
    //             <MenuItem key={setting} onClick={() => handleCloseUserMenu({ setting })}>
    //               <Typography textAlign="center">{setting}</Typography>
    //             </MenuItem>
    //           ))}
    //           { !isAuth && settingsNoAuth.map((setting) => (
    //             <MenuItem key={setting} onClick={() => handleCloseUserMenu({ setting })}>
    //               <Typography textAlign="center">{setting}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>

    <AppBar sx={{backgroundColor: '#F0DB4F'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <LogoLeftNavbar src={ LogoIconCinza } alt='logo_cinza' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: '#2b2b2b' }} />
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
              {pagesNoAuth.map((page) => (
                <MenuItem sx={{ backgroundColor: '#F0DB4F' }} key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: '#2b2b2b' }} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <LogoMiddleNavBar src={ LogoStCinza } alt='logo_cinza' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pagesNoAuth.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#2b2b2b', display: 'block', '&:hover': { color: '#2b2b2b', textDecoration: 'underline' }  }}
              >
                {page}
              </Button>
            ))}
          </Box>

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
              {settingsNoAuth.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
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
