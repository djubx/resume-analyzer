'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar, Box, Button, CircularProgress, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import LogoutButton from './LogoutButton';
import { useRouter } from 'next/navigation';

export default function UserProfile() {
  const { user, error, isLoading } = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    router.push('/profile');
    handleClose();
  };

  if (isLoading) return <CircularProgress size={24} />;
  if (error) return <div>Error: {error.message}</div>;
  
  if (!user) return null;

  return (
    <Box>
      <Button 
        onClick={handleClick}
        sx={{ 
          textTransform: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          p: 0.5
        }}
      >
        <Avatar 
          src={user.picture || undefined} 
          alt={user.name || 'User'} 
          sx={{ width: 32, height: 32 }}
        />
        <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
          {user.name}
        </Typography>
      </Button>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem>
          <LogoutButton variant="text" sx={{ p: 0, minWidth: 'auto' }} />
        </MenuItem>
      </Menu>
    </Box>
  );
} 