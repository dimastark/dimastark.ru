import React from 'react';

import { useColors } from '../../contexts/colors';

import styles from './separator.module.css';

export const Separator: React.FC = () => {
    const { primary: color } = useColors();

    return (
        <svg className={styles.separator} viewBox="0 0 100 37">
            <path d="M0,0 33,37 50,29 67,37 100,0 50,25z" fill={color} />
            <polygon points="4,3 33,35 50,28 67,35 96,3 50,26" fill="#eceff1" />
        </svg>
    );
};
