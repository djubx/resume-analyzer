'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Box, CircularProgress } from '@mui/material';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import UserProfile from './UserProfile';

export default function AuthButtons() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <CircularProgress size={24} />;
  }

  if (user) {
    return <UserProfile />;
  }

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <LoginButton />
      <SignupButton />
    </Box>
  );
} 