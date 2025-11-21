'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <Link href="/" className={styles.logo}>
                    Auto<span>Mates</span>
                </Link>
                <div className={styles.links}>
                    <Link href="/#vision" className={styles.link}>{t.navbar.vision}</Link>
                    <Link href="/#how-it-works" className={styles.link}>{t.navbar.howItWorks}</Link>
                    <Link href="/#pricing" className={styles.link}>{t.navbar.pricing}</Link>
                    <Link href="/#faq" className={styles.link}>{t.navbar.faq}</Link>
                </div>
                <div className={styles.actions}>
                    <div className={styles.langSwitch}>
                        <button
                            className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
                            onClick={() => setLanguage('en')}
                        >
                            EN
                        </button>
                        <button
                            className={`${styles.langBtn} ${language === 'es' ? styles.active : ''}`}
                            onClick={() => setLanguage('es')}
                        >
                            ES
                        </button>
                    </div>
                    <Link href="/contacto" className={styles.cta}>
                        {t.navbar.cta}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
