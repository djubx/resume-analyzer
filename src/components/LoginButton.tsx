'use client';

import { Button, ButtonProps } from '@mui/material';
import { useRouter } from 'next/navigation';

interface LoginButtonProps extends ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export default function LoginButton({ variant = 'outlined', color = 'primary', ...props }: LoginButtonProps) {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/api/auth/login');
  };

  return (
    <Button
      onClick={handleLogin}
      variant={variant}
      color={color}
      {...props}
    >
      {props.children || 'Log in'}
    </Button>
  );
} 