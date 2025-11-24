'use client';

import styles from './Clients.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Clients() {
    const { t } = useLanguage();
    const clients = [
        "TechFlow", "Nexus", "Vertex", "Orbital", "Quantum", "Synergy"
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <p className={styles.label}>{t.clients.label}</p>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marquee}>
                        {clients.map((client, index) => (
                            <div key={`first-${index}`} className={styles.logo}>
                                {client}
                            </div>
                        ))}
                        {clients.map((client, index) => (
                            <div key={`second-${index}`} className={styles.logo}>
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
