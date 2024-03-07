import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavigationBar, NavigationBarItem } from './components';
import { redirect } from 'next/dist/server/api-utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Patrick - Software Engineer',
    description: "Welcone to Patrick's portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavigationBar>
                    <NavigationBarItem href={'/'}>Home</NavigationBarItem>
                    <NavigationBarItem href={'/about'}>About</NavigationBarItem>
                </NavigationBar>
                {children}
            </body>
        </html>
    );
}
