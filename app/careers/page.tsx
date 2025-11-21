'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '../text-page.module.scss';
import FormattedText from '@/components/FormattedText';

export default function Careers() {
    const { t } = useLanguage();

    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1>
                    {t.careers.titlePrefix} <span className={styles.highlight}>{t.careers.titleHighlight}</span>
                </h1>

                <h2>{t.careers.philosophyTitle}</h2>
                <p><FormattedText text={t.careers.philosophyText} /></p>

                <h2>{t.careers.openingsTitle}</h2>
                <h3>{t.careers.positionTitle}</h3>
                <p><FormattedText text={t.careers.positionDesc} /></p>

                <a href="mailto:careers@automates.com" className={styles.cta}>
                    {t.careers.cta}
                </a>
            </div>
            <Footer />
        </main>
    );
}
