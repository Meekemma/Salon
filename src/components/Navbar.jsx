import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../styles/main.css';
``
const pages = ['Home', 'About', 'Services', 'Contact'];
const servicesList = ['Haircut', 'Nail Polishing', 'Styling', 'Shaving'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const navigate = useNavigate();  // To navigate programmatically

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const handleNavigate = (page) => {
    handleCloseNavMenu();
    const route = page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`;
    navigate(route);  // Navigate to the appropriate route
  };

  return (
    <AppBar position="static" className="navbar container" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#0D6E6E',
              textDecoration: 'none',
            }}
          >
            Company Logo
          </Typography>

          {/* Responsive Menu for smaller screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: '#C19A6B' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleNavigate(page)}>
                    <Typography sx={{ textAlign: 'center', color: '#333333' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigate(page)}
                sx={{ my: 2, color: '#333333', display: 'block' }}
              >
                {page === 'Services' ? (
                  <>
                    Services <ArrowDropDownIcon onClick={handleOpenServicesMenu} />
                  </>
                ) : (
                  page
                )}
              </Button>
            ))}

            {/* Services dropdown menu */}
            <Menu
              id="services-menu"
              anchorEl={anchorElServices}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElServices)}
              onClose={handleCloseServicesMenu}
            >
              {servicesList.map((service) => (
                <MenuItem key={service} onClick={handleCloseServicesMenu}>
                  <Typography sx={{ textAlign: 'center', color: '#333333' }}>{service}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Right side: Book Us button for larger screens */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="contained"
              sx={{
                marginLeft: 'auto',
                backgroundColor: '#C19A6B',
                color: '#F9F9F9',
                borderRadius: '50px',
                padding: '10px 50px',
                '&:hover': {
                  backgroundColor: '#0D6E6E',
                },
              }}
            >
              Booking
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
