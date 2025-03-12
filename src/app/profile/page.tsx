'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar, Box, Button, CircularProgress, Container, Divider, Paper, Typography } from '@mui/material';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton';

export default function ProfilePage() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    console.error('Auth0 error:', error);
    // Redirect to the custom error page with the error message
    router.push(`/auth-error?error=${encodeURIComponent(error.message)}`);
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    // Redirect to login if not authenticated
    router.push('/api/auth/login');
    return null;
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography 
          component="h1" 
          sx={{ 
            mb: 4, 
            fontWeight: 600,
            fontSize: '2.125rem',
            lineHeight: 1.235
          }}
        >
          Your Profile
        </Typography>
        
        <Paper elevation={0} sx={{ p: 4, borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'flex-start' }, gap: 4, mb: 4 }}>
            <Avatar 
              src={user.picture || undefined}
              alt={user.name || 'User'}
              sx={{ width: 100, height: 100 }}
            />
            
            <Box>
              <Typography 
                component="h2" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: '1.5rem',
                  lineHeight: 1.334
                }}
              >
                {user.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {user.email}
              </Typography>
              
              <LogoutButton 
                variant="outlined" 
                sx={{ 
                  borderRadius: '100px',
                  textTransform: 'none',
                  px: 3
                }}
              />
            </Box>
          </Box>
          
          <Divider sx={{ my: 3 }} />
          
          <Box>
            <Typography 
              component="h3" 
              sx={{ 
                mb: 2, 
                fontWeight: 600,
                fontSize: '1.25rem',
                lineHeight: 1.6
              }}
            >
              Account Information
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 2fr' }, gap: 2 }}>
              <Typography variant="body2" color="text.secondary">User ID</Typography>
              <Typography variant="body2">{user.sub}</Typography>
              
              <Typography variant="body2" color="text.secondary">Email Verified</Typography>
              <Typography variant="body2">{user.email_verified ? 'Yes' : 'No'}</Typography>
              
              <Typography variant="body2" color="text.secondary">Last Updated</Typography>
              <Typography variant="body2">{user.updated_at && new Date(user.updated_at).toLocaleDateString()}</Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
} 