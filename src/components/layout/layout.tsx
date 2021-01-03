import React from 'react';

import { Footer } from 'src/components/footer';
import { Header } from 'src/components/header';

import './global.css';

import styles from './layout.module.css';

interface ILayoutProps {
    children: JSX.Element[] | JSX.Element;
}

export function Layout({ children }: ILayoutProps) {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
}
