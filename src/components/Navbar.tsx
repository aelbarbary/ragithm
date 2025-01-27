import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: any) => location.pathname === path;

  const navItems = [
    // { path: '/', label: 'Home' },
    // { path: '/projects', label: 'Projects' },
    // { path: '/case-studies', label: 'Case Studies' },
    // { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <AppBar position="fixed" color="default" elevation={1} sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Toolbar>
          {/* Logo and Brand Name */}
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Brain style={{ height: 32, width: 32, color: '#3b82f6' }} />
            <Typography variant="h6" component={Link} to="/" sx={{ ml: 1, textDecoration: 'none', color: 'text.primary', fontWeight: 700 }}>
              Ragithm
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} gap={2}>
            {navItems.slice(0, -1).map(({ path, label }) => (
              <Button
                key={path}
                component={Link}
                to={path}
                color={isActive(path) ? 'primary' : 'inherit'}
                sx={{
                  fontWeight: isActive(path) ? 'bold' : 'normal',
                  textTransform: 'none',
                  px: 2,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {label}
              </Button>
            ))}
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              sx={{ px: 3, py: 1.2 }}
            >
              Contact
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 250 }}>
          <Box display="flex" justifyContent="flex-end" p={2}>
            <IconButton onClick={() => setIsOpen(false)}>
              <X />
            </IconButton>
          </Box>
          <List>
            {navItems.map(({ path, label }) => (
              <ListItem
                key={path}
                disablePadding
                onClick={() => setIsOpen(false)}
              >
                <ListItemButton
                  component={Link}
                  to={path}
                  selected={isActive(path)}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      color: isActive(path) ? 'primary' : 'text.primary',
                      fontWeight: isActive(path) ? 'bold' : 'normal',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

    </>
  );
};

export default Navbar;
