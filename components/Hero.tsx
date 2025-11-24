'use client';

import styles from './Hero.module.scss';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const { t, language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const starsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const stars = starsRef.current;

        stars.forEach((star, i) => {
            gsap.to(star, {
                y: '+=20',
                rotation: i % 2 === 0 ? 10 : -10,
                duration: 2 + i,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: i * 0.5
            });
        });

        gsap.to(stars, {
            yPercent: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // Refresh ScrollTrigger to ensure correct positioning
        ScrollTrigger.refresh();
    }, []);

    const addToStars = (el: HTMLDivElement | null) => {
        if (el && !starsRef.current.includes(el)) {
            starsRef.current.push(el);
        }
    };

    return (
        <section className={styles.hero} ref={containerRef}>
            <div className={styles.star} style={{ top: '15%', left: '5%' }} ref={addToStars}>
                <StarIcon size={48} />
            </div>
            <div className={styles.star} style={{ top: '25%', right: '10%' }} ref={addToStars}>
                <StarIcon size={64} />
            </div>
            <div className={styles.star} style={{ bottom: '20%', left: '15%' }} ref={addToStars}>
                <StarIcon size={32} />
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {language === 'en' ? (
                            <>Unlock Operational Freedom with <span className={styles.highlight}>Expert</span> <span className={styles.highlight}>Automation.</span></>
                        ) : (
                            <>Desbloquea Libertad Operativa con <span className={styles.highlight}>Automatización</span> <span className={styles.highlight}>Especializada.</span></>
                        )}
                    </h1>
                    <p className={styles.subtitle}>
                        {t.hero.subtitle}
                    </p>
                    <div className={styles.actions}>
                        <Link href="/contacto" className={styles.primaryBtn}>{t.hero.cta}</Link>
                    </div>
                    <div className={styles.trustBadge}>
                        <p>{t.hero.trust}</p>
                    </div>
                </div>
                <div className={styles.visual}>
                    <div className={styles.imageWrapper}>
                        <video
                            src="/Mascota_Animada_1.mp4"
                            className={styles.characterImage}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function StarIcon({ size }: { size: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'var(--accent-primary)', opacity: 0.6 }}
        >
            <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
