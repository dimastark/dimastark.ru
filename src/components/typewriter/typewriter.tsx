import { Fragment, useEffect, useState } from 'react';

import styles from './typewriter.module.css';

export interface TypewriterSegment {
    text: string;
    color?: string;
}

interface TypewriterProps {
    segments: TypewriterSegment[];
    className?: string;
    /** Delay between characters, in ms. */
    speed?: number;
}

function renderWithBreaks(text: string) {
    const lines = text.split('\n');

    return lines.map((line, i) => (
        <Fragment key={i}>
            {i > 0 && <br />}
            {line}
        </Fragment>
    ));
}

export function Typewriter({
    segments,
    className,
    speed = 70,
}: TypewriterProps) {
    const total = segments.reduce((sum, seg) => sum + seg.text.length, 0);
    const [count, setCount] = useState(0);
    const done = count >= total;

    useEffect(() => {
        if (done) {
            return;
        }

        const id = setTimeout(() => setCount((current) => current + 1), speed);

        return () => clearTimeout(id);
    }, [count, done, speed]);

    let remaining = count;

    return (
        <span className={className}>
            {segments.map((seg, i) => {
                const shown = seg.text.slice(0, Math.max(0, remaining));

                remaining -= seg.text.length;

                return (
                    <span
                        key={i}
                        style={seg.color ? { color: seg.color } : undefined}
                    >
                        {renderWithBreaks(shown)}
                    </span>
                );
            })}
            <span className={styles.cursor} aria-hidden="true" />
        </span>
    );
}
