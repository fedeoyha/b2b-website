'use client';

import { Keyboard, Link as LinkIcon, Clock, Rocket } from 'lucide-react';
import styles from './ValueProps.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ValueProps() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            gsap.from(
                containerRef.current.children,
                {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 95%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }, []);

    return (
        <section className={styles.section} id="vision">
            <div className="container">
                <div className={styles.grid} ref={containerRef}>
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
