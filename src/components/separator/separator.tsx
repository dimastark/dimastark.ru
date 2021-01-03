import React from 'react';

import * as colors from 'src/utils/colors';

import styles from './separator.module.css';

export function Separator() {
    return (
        <svg
            className={styles.separator}
            viewBox="0 0 100 37"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <mask id="hole">
                    <rect width="100%" height="100%" fill="white" />
                    <path fill="black" d="M4 3l29 32 17-7 17 7L96 3 50 26z" />
                </mask>
            </defs>
            <path
                d="M0 0l33 37 17-8 17 8 33-37-50 25z"
                fill={colors.ACCENT}
                mask="url(#hole)"
            />
        </svg>
    );
}
