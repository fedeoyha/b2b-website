'use client';

import Link from 'next/link';
import styles from './Footer.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>Auto<span>Mates</span></h3>
                        <p className={styles.tagline}>{t.footer.description}</p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>{t.footer.company}</h4>
                            <Link href="/about">{t.footer.about}</Link>
                            <Link href="/careers">{t.footer.careers}</Link>
                            <Link href="/contacto">{t.footer.contact}</Link>
                        </div>

                        <div className={styles.column}>
                            <h4>{t.footer.legal}</h4>
                            <Link href="/privacy">{t.footer.privacy}</Link>
                            <Link href="/terms">{t.footer.terms}</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} AutoMates. {t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
