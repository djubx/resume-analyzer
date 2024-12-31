'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  Container,
  Menu,
  MenuItem,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { 
      label: "Services",
      children: [
        { href: "/resume-analyzer", label: "Resume Analyzer" },
        { href: "/ats-score", label: "ATS Score" },
        { href: "/resume-checklist", label: "Resume Checklist" },
        { href: "/create-resume", label: "Create Resume" },
      ]
    },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About us" },
  ];

  return (
    <AppBar 
      position="static" 
      elevation={0} 
      sx={{ 
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, minHeight: '64px' }}>
          {/* Logo */}
          <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src="/logo.png"
              alt="Resume Checkers Logo"
              width={180}
              height={40}
              priority
              style={{ height: 'auto' }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Box key={item.label}>
                {item.children ? (
                  <>
                    <Button
                      onClick={handleServicesClick}
                      endIcon={<KeyboardArrowDownIcon />}
                      sx={{
                        color: 'text.primary',
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 400,
                        px: 0.5,
                        '&:hover': {
                          color: 'primary.main',
                          background: 'none',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      anchorEl={servicesAnchorEl}
                      open={Boolean(servicesAnchorEl)}
                      onClose={handleServicesClose}
                      elevation={1}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      sx={{
                        '& .MuiPaper-root': {
                          mt: 1,
                          minWidth: 180,
                          boxShadow: theme.shadows[1],
                        }
                      }}
                    >
                      {item.children.map((child) => (
                        <MenuItem
                          key={child.href}
                          component={Link}
                          href={child.href}
                          onClick={handleServicesClose}
                          sx={{
                            color: 'text.primary',
                            fontSize: '0.95rem',
                            py: 1,
                            '&:hover': {
                              color: 'primary.main',
                              backgroundColor: 'action.hover',
                            },
                          }}
                        >
                          {child.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Button
                    component={Link}
                    href={item.href}
                    sx={{
                      color: 'text.primary',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 400,
                      px: 0.5,
                      '&:hover': {
                        color: 'primary.main',
                        background: 'none',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )}
              </Box>
            ))}
            
            {/* Auth Buttons */}
            <Box sx={{ display: 'flex', gap: 2, ml: 2 }}>
              <Button
                component={Link}
                href="/login"
                variant="outlined"
                sx={{
                  color: 'primary.main',
                  borderColor: 'primary.main',
                  textTransform: 'none',
                  borderRadius: '100px',
                  px: 3,
                  py: 0.8,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  borderWidth: '1.5px',
                  '&:hover': {
                    borderWidth: '1.5px',
                    borderColor: 'primary.dark',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Log in
              </Button>
              <Button
                component={Link}
                href="/signup"
                variant="contained"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: '100px',
                  px: 3,
                  py: 0.8,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  boxShadow: 'none',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    boxShadow: 'none',
                  },
                }}
              >
                Sign up
              </Button>
            </Box>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { md: 'none' }, color: 'text.primary' }}
            onClick={() => setIsOpen(true)}
            edge="end"
          >
            <FaBars />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <IconButton
            onClick={() => setIsOpen(false)}
            sx={{ mb: 2, color: 'text.primary' }}
          >
            <FaTimes />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <Box key={item.label}>
                {item.children ? (
                  <>
                    <ListItem sx={{ color: 'text.primary', fontWeight: 500 }}>
                      <ListItemText 
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: '1rem',
                          fontWeight: 500
                        }}
                      />
                    </ListItem>
                    {item.children.map((child) => (
                      <ListItem
                        key={child.href}
                        component={Link}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        sx={{
                          pl: 4,
                          color: 'text.secondary',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        <ListItemText 
                          primary={child.label}
                          primaryTypographyProps={{
                            fontSize: '0.95rem'
                          }}
                        />
                      </ListItem>
                    ))}
                  </>
                ) : (
                  <ListItem
                    component={Link}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    sx={{
                      color: 'text.primary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    <ListItemText 
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: '1rem',
                        fontWeight: 500
                      }}
                    />
                  </ListItem>
                )}
              </Box>
            ))}
            <Box sx={{ mt: 3, px: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                component={Link}
                href="/login"
                variant="outlined"
                fullWidth
                sx={{
                  color: 'primary.main',
                  borderColor: 'primary.main',
                  textTransform: 'none',
                  borderRadius: '100px',
                  py: 1,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  borderWidth: '1.5px',
                  '&:hover': {
                    borderWidth: '1.5px',
                    borderColor: 'primary.dark',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Log in
              </Button>
              <Button
                component={Link}
                href="/signup"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: '100px',
                  py: 1,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  boxShadow: 'none',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    boxShadow: 'none',
                  },
                }}
              >
                Sign up
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}