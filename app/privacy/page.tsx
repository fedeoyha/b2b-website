'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '../text-page.module.scss';
import FormattedText from '@/components/FormattedText';

export default function Privacy() {
    const { t } = useLanguage();

    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1>
                    {t.privacy.titlePrefix} <span className={styles.highlight}>{t.privacy.titleHighlight}</span>
                </h1>

                <h2>{t.privacy.collectionTitle}</h2>
                <p><FormattedText text={t.privacy.collectionText} /></p>

                <h2>{t.privacy.usageTitle}</h2>
                <p><FormattedText text={t.privacy.usageText} /></p>

                <h2>{t.privacy.cookiesTitle}</h2>
                <p><FormattedText text={t.privacy.cookiesText} /></p>

                <h2>{t.privacy.rightsTitle}</h2>
                <p><FormattedText text={t.privacy.rightsText} /></p>
            </div>
            <Footer />
        </main>
    );
}
