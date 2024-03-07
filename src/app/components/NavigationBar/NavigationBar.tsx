'use client'

import { useRouter } from 'next/navigation';

interface NavigationBarProps {
    children?: React.ReactNode;
}

interface NavigationBarItemProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    href?: string;
    children?: React.ReactNode;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ children }) => {
    return <div>{children}</div>;
};

export const NavigationBarItem: React.FC<NavigationBarItemProps> = ({
    href = '/',
    children,
    onClick,
    ...rest
}) => {
    const router = useRouter();

    const handleNavigation = (e: any) => {
        onClick && onClick(e);
        href && router.push(href);
    };

    return <button onClick={handleNavigation} {...rest}>{children}</button>;
};
