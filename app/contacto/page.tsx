'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './contact.module.scss';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

function ContactContent() {
    const { t, language } = useLanguage();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const searchParams = useSearchParams();
    const router = useRouter();
    const planParam = searchParams.get('plan');
    const [selectedPlan, setSelectedPlan] = useState(planParam || '');

    useEffect(() => {
        if (planParam) {
            setSelectedPlan(planParam);
        }
    }, [planParam]);

    useEffect(() => {
        if (planParam === 'blueprint') {
            router.push('/checkout');
        }
    }, [planParam, router]);

    if (planParam === 'blueprint') {
        return null; // Prevent flashing content before redirect
    }

    const isPartner = selectedPlan === 'partner';
    const isCustom = selectedPlan === 'custom';

    let displayTitle = t.contact.title;
    let displaySubtitle = t.contact.subtitle;
    let displayBenefits = t.contact.benefits;

    if (isPartner) {
        displayTitle = t.contact.partnerContent.title;
        displaySubtitle = t.contact.partnerContent.subtitle;
        displayBenefits = t.contact.partnerContent.benefits;
    } else if (isCustom) {
        displayTitle = t.contact.customContent.title;
        displaySubtitle = t.contact.customContent.subtitle;
        displayBenefits = t.contact.customContent.benefits;
    }

    const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlan(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            plan: selectedPlan, // Use state value
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('idle');
                alert(t.contact.errorMessage);
            }
        } catch (error) {
            setStatus('idle');
            alert(t.contact.errorMessage);
        }
    };

    return (
        <main>
            <Navbar />
            <section className={styles.section}>
                <div className={styles.container}>
                    {/* Left Column: Context & Benefits */}
                    <div className={styles.info}>
                        <h1>{displayTitle}</h1>
                        <p>{displaySubtitle}</p>

                        <div className={styles.benefits}>
                            {displayBenefits.map((benefit, index) => (
                                <div key={index} className={styles.benefit}>
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className={styles.formCard}>
                        {status === 'success' ? (
                            <div className={styles.successMessage}>
                                <h3>{t.contact.successMessage}</h3>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className={styles.grid}>
                                    <div className={styles.group}>
                                        <label>{t.contact.nameLabel}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={t.contact.namePlaceholder}
                                            required
                                            disabled={status === 'loading'}
                                        />
                                    </div>
                                    <div className={styles.group}>
                                        <label>{t.contact.emailLabel}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder={t.contact.emailPlaceholder}
                                            required
                                            disabled={status === 'loading'}
                                        />
                                    </div>
                                </div>

                                <div className={styles.grid}>
                                    <div className={styles.group}>
                                        <label>{t.contact.companyLabel}</label>
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder={t.contact.companyPlaceholder}
                                            required
                                            disabled={status === 'loading'}
                                        />
                                    </div>
                                    <div className={styles.group}>
                                        <label>{t.contact.planLabel}</label>
                                        <select
                                            name="plan"
                                            disabled={status === 'loading'}
                                            required
                                            value={selectedPlan}
                                            onChange={handlePlanChange}
                                        >
                                            <option value="">{language === 'en' ? 'Select...' : 'Seleccionar...'}</option>
                                            <option value="blueprint">{t.contact.planOptions.blueprint}</option>
                                            <option value="custom">{t.contact.planOptions.sprint}</option>
                                            <option value="partner">{t.contact.planOptions.partner}</option>
                                            <option value="exploring">{t.contact.planOptions.discover}</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.group}>
                                    <label>{t.contact.messageLabel}</label>
                                    <textarea
                                        name="message"
                                        rows={6}
                                        placeholder={t.contact.messagePlaceholder}
                                        required
                                        disabled={status === 'loading'}
                                    />
                                </div>

                                <button type="submit" disabled={status === 'loading'} className={styles.submit}>
                                    {status === 'loading' ? t.contact.sending : t.contact.submitButton}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default function Contact() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ContactContent />
        </Suspense>
    );
}
