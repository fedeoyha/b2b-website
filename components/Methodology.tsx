'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Methodology.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Methodology() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const steps = stepsRef.current;

        steps.forEach((step, index) => {
            gsap.fromTo(step,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !stepsRef.current.includes(el)) {
            stepsRef.current.push(el);
        }
    };

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
                    <div className={styles.card} ref={addToRefs}>
                        <div className={styles.stepNumber}>01</div>
                        <h3>{t.methodology.step1.title}</h3>
                        <p>{t.methodology.step1.description}</p>
                    </div>

                    <div className={styles.card} ref={addToRefs}>
                        <div className={styles.stepNumber}>02</div>
                        <h3>{t.methodology.step2.title}</h3>
                        <p>{t.methodology.step2.description}</p>
                    </div>

                    <div className={styles.card} ref={addToRefs}>
                        <div className={styles.stepNumber}>03</div>
                        <h3>{t.methodology.step3.title}</h3>
                        <p>{t.methodology.step3.description}</p>
                    </div>
                </div>

                <div className={styles.lowCodeSection} ref={addToRefs}>
                    <h3>{t.methodology.lowCode.title}</h3>
                    <p>{t.methodology.lowCode.description}</p>
                </div>
            </div>
        </section>
    );
}
