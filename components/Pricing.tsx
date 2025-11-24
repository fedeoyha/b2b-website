'use client';

import Link from 'next/link';
import styles from './Pricing.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
    const { t } = useLanguage();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (wrapperRef.current) {
            gsap.fromTo(
                wrapperRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: 'top 75%',
                        end: 'bottom 25%',
                        toggleActions: 'play reverse play reverse'
                    }
                }
            );
        }
    }, []);

    return (
        <section className={styles.section} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>{t.pricing.label}</span>
                    <h2 className={styles.title}>{t.pricing.title}</h2>
                </div>

                {/* Unified Grid Wrapper */}
                <div className={styles.pricingWrapper} ref={wrapperRef}>
                    {/* Pricing Cards Row */}
                    <div className={styles.cardsRow}>
                        {/* The Blueprint */}
                        <div className={`${styles.card} ${styles.light}`}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{t.pricing.blueprint.name}</h3>
                                <div className={styles.priceContainer}>
                                    <span className={styles.currency}>$</span>
                                    <span className={styles.price}>900</span>
                                    <span className={styles.period}>{t.pricing.blueprint.period}</span>
                                </div>
                                <p className={styles.description}>
                                    {t.pricing.blueprint.description}
                                </p>
                            </div>
                            <ul className={styles.featureList}>
                                {t.pricing.blueprint.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <Link href="/checkout" className={`${styles.cta} ${styles.ctaOutline}`}>
                                {t.pricing.blueprint.cta}
                            </Link>
                        </div>

                        {/* Custom Sprint */}
                        <div className={`${styles.card} ${styles.medium}`}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{t.pricing.sprint.name}</h3>
                                <p className={styles.description}>
                                    {t.pricing.sprint.description}
                                </p>
                            </div>
                            <ul className={styles.featureList}>
                                {t.pricing.sprint.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <Link href="/contacto?plan=custom" className={`${styles.cta} ${styles.ctaSolid}`}>
                                {t.pricing.sprint.cta}
                            </Link>
                        </div>

                        {/* The Partner */}
                        <div className={`${styles.card} ${styles.premium}`}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{t.pricing.partner.name}</h3>
                                <div className={styles.priceContainer}>
                                    <span className={styles.currency}>$</span>
                                    <span className={styles.price}>2,500</span>
                                    <span className={styles.period}>{t.pricing.partner.period}</span>
                                </div>
                                <p className={styles.description}>
                                    {t.pricing.partner.description}
                                </p>
                            </div>
                            <ul className={styles.featureList}>
                                {t.pricing.partner.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <Link href="/contacto?plan=partner" className={`${styles.cta} ${styles.ctaPremium}`}>
                                {t.pricing.partner.cta}
                            </Link>
                        </div>
                    </div>

                    {/* Comparison Matrix */}
                    <div className={styles.comparisonMatrix}>
                        <h3 className={styles.comparisonTitle}>{t.pricing.comparisonTitle}</h3>

                        {/* Header Row */}
                        <div className={styles.matrixRow}>
                            <div className={styles.matrixHeader}>{t.pricing.comparisonHeaders.feature}</div>
                            <div className={styles.matrixHeader}>{t.pricing.comparisonHeaders.blueprint}</div>
                            <div className={styles.matrixHeader}>{t.pricing.comparisonHeaders.sprint}</div>
                            <div className={styles.matrixHeader}>{t.pricing.comparisonHeaders.partner}</div>
                        </div>

                        {/* Data Rows */}
                        <div className={styles.matrixRow}>
                            <div className={styles.matrixFeature}>{t.pricing.comparisonRows.logic.name}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.blueprint}>{t.pricing.comparisonRows.logic.blueprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.sprint}>{t.pricing.comparisonRows.logic.sprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.partner}>{t.pricing.comparisonRows.logic.partner}</div>
                        </div>

                        <div className={styles.matrixRow}>
                            <div className={styles.matrixFeature}>{t.pricing.comparisonRows.implementation.name}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.blueprint}>{t.pricing.comparisonRows.implementation.blueprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.sprint}><span className={styles.check}>{t.pricing.comparisonRows.implementation.sprint}</span></div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.partner}><span className={styles.check}>{t.pricing.comparisonRows.implementation.partner}</span></div>
                        </div>

                        <div className={styles.matrixRow}>
                            <div className={styles.matrixFeature}>{t.pricing.comparisonRows.scope.name}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.blueprint}>{t.pricing.comparisonRows.scope.blueprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.sprint}>{t.pricing.comparisonRows.scope.sprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.partner}>{t.pricing.comparisonRows.scope.partner}</div>
                        </div>

                        <div className={styles.matrixRow}>
                            <div className={styles.matrixFeature}>{t.pricing.comparisonRows.maintenance.name}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.blueprint}>{t.pricing.comparisonRows.maintenance.blueprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.sprint}>{t.pricing.comparisonRows.maintenance.sprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.partner}>{t.pricing.comparisonRows.maintenance.partner}</div>
                        </div>

                        <div className={styles.matrixRow}>
                            <div className={styles.matrixFeature}>{t.pricing.comparisonRows.support.name}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.blueprint}>{t.pricing.comparisonRows.support.blueprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.sprint}>{t.pricing.comparisonRows.support.sprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.partner}>{t.pricing.comparisonRows.support.partner}</div>
                        </div>

                        <div className={styles.matrixRow}>
                            <div className={styles.matrixFeature}>{t.pricing.comparisonRows.sla.name}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.blueprint}>{t.pricing.comparisonRows.sla.blueprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.sprint}>{t.pricing.comparisonRows.sla.sprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.partner}><span className={styles.check}>{t.pricing.comparisonRows.sla.partner}</span></div>
                        </div>

                        <div className={styles.matrixRow}>
                            <div className={styles.matrixFeature}>{t.pricing.comparisonRows.billing.name}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.blueprint}>{t.pricing.comparisonRows.billing.blueprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.sprint}>{t.pricing.comparisonRows.billing.sprint}</div>
                            <div className={styles.matrixCell} data-plan={t.pricing.comparisonHeaders.partner}>{t.pricing.comparisonRows.billing.partner}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
