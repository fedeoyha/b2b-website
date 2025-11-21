'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '../text-page.module.scss';
import FormattedText from '@/components/FormattedText';

export default function About() {
    const { t } = useLanguage();

    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1>
                    {t.about.titlePrefix}<span className={styles.brandName}>Auto<span>Mates</span></span>: <span className={styles.highlight}>{t.about.titleHighlight}</span>
                </h1>

                <h2>{t.about.missionTitle}</h2>
                <p><FormattedText text={t.about.missionText} /></p>

                <h2>{t.about.logicTitle}</h2>
                <p><FormattedText text={t.about.logicText} /></p>

                <h2>{t.about.riskTitle}</h2>
                <p><FormattedText text={t.about.riskText} /></p>
            </div>
            <Footer />
        </main>
    );
}
