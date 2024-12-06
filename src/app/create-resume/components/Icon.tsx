interface IconProps {
    path: string;
    className?: string;
}

export function Icon({ path, className = "h-5 w-5" }: IconProps) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={className} 
            viewBox="0 0 20 20" 
            fill="currentColor"
        >
            <path d={path} />
        </svg>
    );
} 