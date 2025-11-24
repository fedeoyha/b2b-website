'use client';

import styles from './Clients.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const clients = [
        "TechFlow", "Nexus", "Vertex", "Orbital", "Quantum", "Synergy"
    ];

    useEffect(() => {
        if (sectionRef.current) {
            gsap.from(
                sectionRef.current,
                {
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 95%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
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
