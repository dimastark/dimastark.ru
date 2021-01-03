import React from 'react';

import { Typist } from 'src/components/typist';
import * as colors from 'src/utils/colors';

import styles from './greeting.module.css';

export function Greeting() {
    const color = colors.ACCENT;

    return (
        <Typist className={styles.greeting}>
            <span>Hello!</span>
            <br />
            <span>
                My name is <span style={{ color }}>dimastark</span>!
            </span>
        </Typist>
    );
}
