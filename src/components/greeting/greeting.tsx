import React from 'react';

import { useColors } from '../../contexts/colors';
import { Typist } from '../typist';

import styles from './greeting.module.css';

export function Greeting() {
    const { primary: color } = useColors();

    return (
        <Typist className={styles.greeting}>
            <span>Hello!</span><br/>
            <span>My name is <span style={{ color }}>dimastark</span>!</span>
        </Typist>
    );
}
