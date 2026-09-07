import { Typewriter } from 'src/components/typewriter';
import * as colors from 'src/utils/colors';

import styles from './greeting.module.css';

export function Greeting() {
    return (
        <Typewriter
            className={styles.greeting}
            segments={[
                { text: 'Hello!\n' },
                { text: 'My name is ' },
                { text: 'dimastark', color: colors.ACCENT },
                { text: '!' },
            ]}
        />
    );
}
