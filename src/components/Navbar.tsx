'use client';

import Link from "next/link";
import Image from "next/image";
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

  // Combined mark + wordmark. Source asset is 969x429 (~2.26:1); rendered
  // at a navbar-appropriate height and scaled by intrinsic aspect ratio.
  const Logo = (
    <Box
      component={Link}
      href="/"
      aria-label="ResuAI — Home"
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        // Keep a fixed display height; width auto-scales from aspect ratio.
        height: 44,
        position: 'relative',
      }}
    >
      <Image
        src="/resuai-logo.png"
        alt="ResuAI"
        width={969}
        height={429}
        priority
        style={{
          height: '100%',
          width: 'auto',
          display: 'block',
        }}
      />
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