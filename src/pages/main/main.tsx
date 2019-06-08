import React from 'react';

import Greeting from '../../components/greeting';
import Separator from '../../components/separator';
import SocialIcon from '../../components/social-icon';

import styles from './main.module.css';

export const Main: React.FC = () => (
    <article className={styles.main}>
        <Greeting/>
        <ul className={styles.socials}>
            <SocialIcon type="email" href="mailto:dvstark@yandex.ru"/>
            <SocialIcon type="github" href="https://github.com/dimastark"/>
            <SocialIcon type="telegram" href="https://t.me/dimastark"/>
            <SocialIcon type="vk" href="https://vk.com/dvstark"/>
        </ul>
        <Separator beforePx={-12}/>
    </article>
);
