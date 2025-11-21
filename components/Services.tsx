'use client';

import styles from './Services.module.scss';
import { Zap, Plane, Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>{t.services.label}</span>
                    <h2 className={styles.title}>{t.services.title}</h2>
                </div>

                <div className={styles.grid}>
                    <div className={styles.serviceCard}>
                        <div className={styles.icon}>
                            <Zap size={32} strokeWidth={1.5} />
                        </div>
                        <h3>{t.services.item1.title}</h3>
                        <p>{t.services.item1.description}</p>
                        <ul className={styles.list}>
                            {t.services.item1.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.icon}>
                            <Plane size={32} strokeWidth={1.5} />
                        </div>
                        <h3>{t.services.item2.title}</h3>
                        <p>{t.services.item2.description}</p>
                        <ul className={styles.list}>
                            {t.services.item2.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.icon}>
                            <Bot size={32} strokeWidth={1.5} />
                        </div>
                        <h3>{t.services.item3.title}</h3>
                        <p>{t.services.item3.description}</p>
                        <ul className={styles.list}>
                            {t.services.item3.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
