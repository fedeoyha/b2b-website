'use client';

import { Keyboard, Link as LinkIcon, Clock, Rocket } from 'lucide-react';
import styles from './ValueProps.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ValueProps() {
    const { t } = useLanguage();

    return (
        <section className={styles.section} id="vision">
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <Keyboard size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className={styles.title}>{t.valueProps.item1.title}</h3>
                        <p className={styles.description}>{t.valueProps.item1.description}</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <LinkIcon size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className={styles.title}>{t.valueProps.item2.title}</h3>
                        <p className={styles.description}>{t.valueProps.item2.description}</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <Clock size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className={styles.title}>{t.valueProps.item3.title}</h3>
                        <p className={styles.description}>{t.valueProps.item3.description}</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <Rocket size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className={styles.title}>{t.valueProps.item4.title}</h3>
                        <p className={styles.description}>{t.valueProps.item4.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
