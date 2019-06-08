import React from 'react';

import { useColors } from '../../contexts/colors';

import styles from './separator.module.css';

interface ISeparatorProps {
    beforePx?: number;
    afterPx?: number;
}

export const Separator: React.FC<ISeparatorProps> = (props: ISeparatorProps) => {
    const { primary: color } = useColors();
    const { beforePx = 0, afterPx = 0 } = props;

    return (
        <div className={styles.separator} style={{
            color,
            marginTop: `${beforePx}px`,
            marginBottom: `${afterPx}px`
        }}>
            {'- '.repeat(200)}
        </div>
    );
};
