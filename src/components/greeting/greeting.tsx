import React from 'react';
import Typist from 'react-typist';

import 'react-typist/dist/Typist.css';

import { useColors } from '../../contexts/colors';

import styles from './greeting.module.css';

export const Greeting: React.FC = () => {
    const { primary: color } = useColors();

    return (
        <Typist className={styles.greeting}>
            <span>Hello!</span><br/>
            <span>My name is <span style={{ color }}>dimastark</span>!</span>
        </Typist>
    );
};
