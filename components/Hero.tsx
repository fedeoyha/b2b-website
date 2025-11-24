'use client';

import styles from './Hero.module.scss';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
export default function Hero() {
    const { t, language } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.star} style={{ top: '15%', left: '5%' }}>
                <StarIcon size={48} />
            </div>
            <div className={styles.star} style={{ top: '25%', right: '10%' }}>
                <StarIcon size={64} />
            </div>
            <div className={styles.star} style={{ bottom: '20%', left: '15%' }}>
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
