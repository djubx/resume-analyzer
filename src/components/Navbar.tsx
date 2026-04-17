'use client';

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AuthButtons from './AuthButtons';

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

  // Priority order: Resume Builder → Resume Analyzer → ATS Score → Resume Checklist
  const navItems = [
    { href: "/", label: "Home" },
    {
      label: "Products",
      children: [
        { href: "/create-resume", label: "Resume Builder" },
        { href: "/resume-analyzer", label: "Resume Analyzer" },
        { href: "/ats-score", label: "ATS Score" },
        { href: "/resume-checklist", label: "Resume Checklist" },
      ]
    },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ];

  const Logo = (
    <Box
      component={Link}
      href="/"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.2,
        textDecoration: 'none',
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3F51B5 0%, #00E5FF 100%)',
          color: '#0B0D10',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: '-0.02em',
          boxShadow: '0 6px 18px -6px rgba(0, 229, 255, 0.55)',
        }}
      >
        R
      </Box>
      <Typography
        component="span"
        sx={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 22,
          fontWeight: 700,
          color: 'text.primary',
          letterSpacing: '-0.02em',
        }}
      >
        Resu<Box component="span" sx={{ color: 'info.main' }}>AI</Box>
      </Typography>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, minHeight: '72px' }}>
          {Logo}

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
            
            {/* Primary CTA + Auth Buttons */}
            <Box sx={{ display: 'flex', gap: 1.5, ml: 2, alignItems: 'center' }}>
              <Button
                component={Link}
                href="/create-resume"
                variant="contained"
                color="primary"
                size="small"
                sx={{ py: 1, px: 2.5 }}
              >
                Build my resume
              </Button>
              <AuthButtons />
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
                href="/create-resume"
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => setIsOpen(false)}
                sx={{ py: 1.2 }}
              >
                Build my resume
              </Button>
              <AuthButtons />
            </Box>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}