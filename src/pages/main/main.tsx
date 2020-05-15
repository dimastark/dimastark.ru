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
                    Love&nbsp;to&nbsp;write&nbsp;code&nbsp;on
                    <span style={{ color: '#064481' }}> C++</span>,&nbsp;
                    <span style={{ color: '#00add8' }}>GO</span>,&nbsp;
                    <span style={{ color: '#3572a5' }}>Python</span>,&nbsp;
                    <span style={{ color: '#8ec653' }}>JS</span>.
                </div>
            </div>
        </Layout>
    );
}
