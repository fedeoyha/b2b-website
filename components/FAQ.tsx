'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section} id="faq">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>{t.faq.label}</span>
                    <h2 className={styles.title}>{t.faq.title}</h2>
                </div>

                <div className={styles.faqList}>
                    {t.faq.items.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{item.question}</span>
                                <ChevronDown
                                    className={styles.icon}
                                    size={20}
                                    strokeWidth={2}
                                />
                            </button>
                            <div className={styles.answerWrapper}>
                                <p className={styles.answer}>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
