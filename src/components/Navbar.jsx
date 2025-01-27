import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import '../styles/main.css';
import angel from '../assets/images/Angel.jpg';

const pages = ['Home', 'About', 'Services', 'Contact'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (page) => {
    handleCloseNavMenu();
    const route = page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`;
    navigate(route);
  };

  const handleOnClick = () => {
    navigate('/booking');
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
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#0D6E6E',
              textDecoration: 'none',
            }}
          >
            <img
              src={angel}
              alt="Angel Logo"
              loading="lazy"
              style={{
                height: '90px', // Default height for larger screens
                width: 'auto',
                borderRadius: '8px',
              }}
              className="responsive-logo" // Class for custom responsive behavior
            />
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
                  '& .MuiPaper-root': {
                    width: '90vw', // Increase width for mobile
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleNavigate(page)}>
                    <Typography
                      sx={{
                        textAlign: 'left',
                        color:
                          location.pathname === `/${page.toLowerCase()}` || (page === 'Home' && location.pathname === '/')
                            ? '#0D6E6E'
                            : '#333333',
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          {/* Desktop Menu */}
          {/* Desktop Menu */}
<Box
  component="nav" // Semantic navigation element
  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
>
  <Box
    component="ul" // Use a list for semantic structure
    sx={{
      listStyle: 'none', // Remove default list styling
      display: 'flex',
      gap: 2, // Add spacing between list items
      padding: 0,
      margin: 0,
    }}
  >
    {pages.map((page) => (
      <Box
        component="li" // List item
        key={page}
        sx={{
          my: 2,
        }}
      >
        <Box
          component="a" // Use an anchor tag for navigation
          href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleNavigate(page); // Use your custom navigation handler
          }}
          sx={{
            color:
              location.pathname === `/${page.toLowerCase()}` || (page === 'Home' && location.pathname === '/')
                ? '#0D6E6E' // Active color
                : '#333333', // Default color
            fontWeight:
              location.pathname === `/${page.toLowerCase()}` || (page === 'Home' && location.pathname === '/')
                ? 'bold' // Active font weight
                : 'normal', // Default font weight
            textDecoration: 'none', // Remove underline
            display: 'block',
            padding: '8px 16px', // Add padding for better click area
            borderRadius: '4px', // Optional: Add rounded corners
            transition: 'color 0.3s ease, background-color 0.3s ease', // Smooth transitions
            '&:hover': {
              color: '#0D6E6E', // Hover color
              backgroundColor: 'rgba(13, 110, 110, 0.1)', // Optional: Light background on hover
            },
          }}
        >
          {page}
        </Box>
      </Box>
    ))}
  </Box>
</Box>

          {/* Right side: Book Us button for larger screens */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="contained"
              onClick={handleOnClick}
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

      {/* Responsive CSS for Logo */}
      <style jsx>{`
        @media (max-width: 768px) {
          .responsive-logo {
            height: 60px; /* Reduce height for mobile */
          }
        }
      `}</style>
    </AppBar>
  );
};

export default Navbar;
