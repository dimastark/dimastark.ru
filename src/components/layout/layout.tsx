import React, { Fragment } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

import styles from './layout.module.css';

interface ILayoutProps {
    children: JSX.Element[] | JSX.Element;
}

export function Layout({ children }: ILayoutProps) {
    return (
        <Fragment>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </Fragment>
    );
}
