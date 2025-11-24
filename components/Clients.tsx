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
                        {/* Duplicate 3 times for seamless infinite scroll */}
                        {[...Array(3)].map((_, setIndex) => (
                            clients.map((client, index) => (
                                <div key={`${setIndex}-${index}`} className={styles.logo}>
                                    {client}
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
