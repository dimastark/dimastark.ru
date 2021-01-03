import React from 'react';

import { Greeting } from 'src/components/greeting';
import { SocialIcon } from 'src/components/social-icon';

import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <Greeting />
            <ul className={styles.socials}>
                <SocialIcon type="email" href="mailto:dvstark@yandex.ru" />
                <SocialIcon
                    type="linkedin"
                    href="http://linkedin.com/in/dimastark"
                />
                <SocialIcon type="github" href="https://github.com/dimastark" />
                <SocialIcon type="telegram" href="https://t.me/dimastark" />
                <SocialIcon type="vk" href="https://vk.com/dvstark" />
            </ul>
        </header>
    );
}
