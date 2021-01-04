import React from 'react';
import { Helmet } from 'react-helmet';

import { Layout } from 'src/components/layout';
import { Separator } from 'src/components/separator';

import styles from './main.module.css';

export function Main() {
    return (
        <Layout center>
            <Helmet title="I am dimastark!">
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <Separator />
            <div className={styles.aboutMe}>
                <div>
                    I work in <span className={styles.yandex}>Yandex</span>.
                </div>
                <div>
                    Love&nbsp;to&nbsp;write&nbsp;code&nbsp;on
                    <span className={styles.cpp}> C++</span>,&nbsp;
                    <span className={styles.go}>GO</span>,&nbsp;
                    <span className={styles.python}>Python</span>,&nbsp;
                    <span className={styles.js}>JS</span>.
                </div>
            </div>
        </Layout>
    );
}
