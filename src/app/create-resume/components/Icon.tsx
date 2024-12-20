import { SvgIcon, SvgIconProps } from '@mui/material';

interface IconProps extends Omit<SvgIconProps, 'children'> {
    path: string;
}

export function Icon({ path, ...props }: IconProps) {
    return (
        <SvgIcon {...props}>
            <path d={path} />
        </SvgIcon>
    );
} 