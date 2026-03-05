'use client';

import { Button, ButtonProps } from '@mui/material';
import { useRouter } from 'next/navigation';

interface SignupButtonProps extends ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export default function SignupButton({ variant = 'contained', color = 'primary', ...props }: SignupButtonProps) {
  const router = useRouter();

  const handleSignup = () => {
    router.push('/api/auth/signup');
  };

  return (
    <Button
      onClick={handleSignup}
      variant={variant}
      color={color}
      {...props}
    >
      {props.children || 'Sign up'}
    </Button>
  );
} 