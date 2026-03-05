'use client';

import { Button, ButtonProps } from '@mui/material';
import { useRouter } from 'next/navigation';

interface LogoutButtonProps extends ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export default function LogoutButton({ variant = 'outlined', color = 'primary', ...props }: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/api/auth/logout');
  };

  return (
    <Button
      onClick={handleLogout}
      variant={variant}
      color={color}
      {...props}
    >
      {props.children || 'Log out'}
    </Button>
  );
} 