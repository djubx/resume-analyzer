'use client';

export const dynamic = 'force-dynamic';

import { Box, Button, Container, Typography, CircularProgress } from '@mui/material';
import Navbar from '@/components/Navbar';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Create a separate component that uses useSearchParams
function ErrorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorMessage = searchParams?.get('error') || 'Authentication error occurred';

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        gap: 4
      }}
    >
      <Typography 
        component="h1" 
        sx={{ 
          fontWeight: 600,
          fontSize: '2.5rem',
          color: 'primary.main'
        }}
      >
        Authentication Error
      </Typography>
      
      <Typography 
        component="p" 
        sx={{ 
          fontSize: '1.125rem',
          color: 'text.secondary',
          maxWidth: '600px',
          mb: 2
        }}
      >
        We encountered an issue while trying to authenticate your account.
      </Typography>
      
      <Box 
        sx={{ 
          p: 3, 
          bgcolor: 'error.light', 
          color: 'error.dark',
          borderRadius: 2,
          maxWidth: '600px',
          width: '100%',
          mb: 2
        }}
      >
        <Typography component="p" sx={{ fontFamily: 'monospace' }}>
          {errorMessage}
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button
          variant="outlined"
          onClick={() => router.push('/')}
          sx={{ 
            borderRadius: '100px',
            px: 3,
            py: 1
          }}
        >
          Return Home
        </Button>
        
        <Button
          variant="contained"
          onClick={() => router.push('/api/auth/login')}
          sx={{ 
            borderRadius: '100px',
            px: 3,
            py: 1
          }}
        >
          Try Again
        </Button>
      </Box>
    </Box>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
      <CircularProgress />
    </Box>
  );
}

// Main page component with Suspense boundary
export default function AuthErrorPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      
      <Container maxWidth="md" sx={{ py: 12 }}>
        <Suspense fallback={<LoadingFallback />}>
          <ErrorContent />
        </Suspense>
      </Container>
    </Box>
  );
} 