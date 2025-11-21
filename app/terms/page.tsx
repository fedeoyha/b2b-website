'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '../text-page.module.scss';
import FormattedText from '@/components/FormattedText';

export default function Terms() {
    const { t } = useLanguage();

    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1>
                    {t.terms.titlePrefix} <span className={styles.highlight}>{t.terms.titleHighlight}</span>
                </h1>

                <h2>{t.terms.acceptanceTitle}</h2>
                <p><FormattedText text={t.terms.acceptanceText} /></p>

                <h2>{t.terms.scopeTitle}</h2>
                <p><FormattedText text={t.terms.scopeText} /></p>

                <h2>{t.terms.paymentTitle}</h2>
                <p><FormattedText text={t.terms.paymentText} /></p>

                <h2>{t.terms.liabilityTitle}</h2>
                <p><FormattedText text={t.terms.liabilityText} /></p>

                <h2>{t.terms.ipTitle}</h2>
                <p><FormattedText text={t.terms.ipText} /></p>
            </div>
            <Footer />
        </main>
    );
}
