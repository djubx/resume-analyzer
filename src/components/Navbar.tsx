'use client';

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaFileAlt, FaChartBar, FaClipboardList, FaInfoCircle, FaEnvelope, FaFileSignature } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Container,
} from '@mui/material';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const navItems = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/create-resume", label: "Create Resume", icon: <FaFileSignature /> },
    { href: "/resume-analyzer", label: "Analyze", icon: <FaFileAlt /> },
    { href: "/ats-score", label: "ATS Score", icon: <FaChartBar /> },
    { href: "/resume-checklist", label: "Checklist", icon: <FaClipboardList /> },
    { href: "/about", label: "About", icon: <FaInfoCircle /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            Resume Checkers
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                startIcon={item.icon}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { sm: 'none' }, color: 'text.secondary' }}
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
          display: { sm: 'none' },
          '& .MuiDrawer-paper': {
            width: 240,
            bgcolor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <IconButton
            onClick={() => setIsOpen(false)}
            sx={{ mb: 2, color: 'text.secondary' }}
          >
            <FaTimes />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setIsOpen(false)}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}