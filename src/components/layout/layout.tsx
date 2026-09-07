import type { ReactNode } from 'react';

import { Footer } from 'src/components/footer';
import { Header } from 'src/components/header';

import './global.css';

import styles from './layout.module.css';

interface ILayoutProps {
    center?: boolean;
    children: ReactNode;
}

export function Layout({ center = false, children }: ILayoutProps) {
    return (
        <>
            <Header />
            <main className={center ? styles.mainCenter : styles.main}>
                {children}
            </main>
            <Footer />
        </>
    );
}
