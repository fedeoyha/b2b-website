'use client';

import { useRef } from 'react';
import styles from './Methodology.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Methodology() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section className={styles.section} id="how-it-works" ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>{t.methodology.label}</span>
                    <h2 className={styles.title}>{t.methodology.title}</h2>
                    <p className={styles.description}>
                        {t.methodology.description}
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.stepNumber}>01</div>
                        <h3>{t.methodology.step1.title}</h3>
                        <p>{t.methodology.step1.description}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.stepNumber}>02</div>
                        <h3>{t.methodology.step2.title}</h3>
                        <p>{t.methodology.step2.description}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.stepNumber}>03</div>
                        <h3>{t.methodology.step3.title}</h3>
                        <p>{t.methodology.step3.description}</p>
                    </div>
                </div>

                <div className={styles.lowCodeSection}>
                    <h3>{t.methodology.lowCode.title}</h3>
                    <p>{t.methodology.lowCode.description}</p>
                </div>
            </div>
        </section>
    );
}
