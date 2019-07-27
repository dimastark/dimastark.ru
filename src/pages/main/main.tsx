import React from 'react';

import { Layout } from '../../components/layout';
import { Separator } from '../../components/separator';

import styles from './main.module.css';

export function Main() {
    return (
        <Layout>
            <Separator />
            <div className={styles.aboutMe}>
                <div>
                    I work in <span style={{ color: '#f00' }}>Y</span>andex.
                </div>
                <div>
                    Love&nbsp;to&nbsp;write&nbsp;code&nbsp;on <span style={{ color: '#29beb0' }}>GO</span>,&nbsp;
                    <span style={{ color: '#8ec653' }}>JS</span>,&nbsp;
                    <span style={{ color: '#386a92' }}>Python</span>.
                </div>
            </div>
        </Layout>
    );
}
