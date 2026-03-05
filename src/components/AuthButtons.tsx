'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Box, CircularProgress, Skeleton } from '@mui/material';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import UserProfile from './UserProfile';

export default function AuthButtons() {
  const { user, isLoading } = useUser();

  // Show skeleton loader instead of spinner for better UX
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Skeleton variant="rectangular" width={80} height={36} sx={{ borderRadius: 1 }} />
        <Skeleton variant="rectangular" width={80} height={36} sx={{ borderRadius: 1 }} />
      </Box>
    );
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