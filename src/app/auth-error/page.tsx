'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import Navbar from '@/components/Navbar';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthErrorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get('error') || 'Authentication error occurred';

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      
      <Container maxWidth="md" sx={{ py: 12 }}>
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
      </Container>
    </Box>
  );
} 