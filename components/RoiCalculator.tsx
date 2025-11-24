'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './RoiCalculator.module.scss';
import { useLanguage } from '@/contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RoiCalculator() {
    const { t, language } = useLanguage();
    const [employees, setEmployees] = useState(3);
    const [hoursPerWeek, setHoursPerWeek] = useState(5);
    const [monthlySalary, setMonthlySalary] = useState(2000);
    const resultsRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    // Calculate ROI
    const hourlyRate = monthlySalary / 173.33; // Average working hours per month
    const totalWeeklyHours = employees * hoursPerWeek;
    const monthlyLoss = totalWeeklyHours * hourlyRate * 4.33; // Average weeks per month
    const yearlyLoss = monthlyLoss * 12;

    useEffect(() => {
        if (resultsRef.current) {
            gsap.fromTo(
                resultsRef.current.querySelectorAll('.result-item'),
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                }
            );
        }
    }, [monthlyLoss, yearlyLoss]);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }, []);

    return (
        <section className={styles.section} id="roi" ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>
                        {language === 'en' ? 'CALCULATOR' : 'CALCULADORA'}
                    </span>
                    <h2 className={styles.customTitle}>
                        {language === 'en' ? 'ROI Calculator' : 'Calculadora de ROI'}
                    </h2>
                    <p className={styles.subtitle}>
                        {language === 'en'
                            ? 'Quantify the Cost of Inefficiency'
                            : 'Cuantifica el Costo de la Ineficiencia'}
                    </p>
                </div>

                <div className={styles.calculator}>
                    <div className={styles.inputs}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="employees">
                                {language === 'en'
                                    ? 'Employees in manual tasks'
                                    : 'Empleados en tareas manuales'}
                            </label>
                            <div className={styles.value}>{employees}</div>
                            <input
                                id="employees"
                                type="range"
                                min="1"
                                max="50"
                                value={employees}
                                onChange={(e) => setEmployees(Number(e.target.value))}
                                className={styles.slider}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="hours">
                                {language === 'en'
                                    ? 'Weekly hours lost per employee'
                                    : 'Horas semanales perdidas por empleado'}
                            </label>
                            <div className={styles.value}>{hoursPerWeek}h</div>
                            <input
                                id="hours"
                                type="range"
                                min="1"
                                max="20"
                                value={hoursPerWeek}
                                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                className={styles.slider}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="salary">
                                {language === 'en'
                                    ? 'Average monthly salary (USD)'
                                    : 'Sueldo mensual promedio (USD)'}
                            </label>
                            <input
                                id="salary"
                                type="number"
                                min="0"
                                max="20000"
                                step="10"
                                value={monthlySalary || ''}
                                onChange={(e) => setMonthlySalary(e.target.value === '' ? 0 : Number(e.target.value))}
                                className={styles.numberInput}
                                placeholder="2000"
                            />
                        </div>

                        <div className={styles.info}>
                            <small>
                                {language === 'en'
                                    ? 'Cost per hour calculated: '
                                    : 'Costo por hora calculado: '}
                                ${hourlyRate.toFixed(2)}
                            </small>
                        </div>
                    </div>

                    <div className={styles.results} ref={resultsRef}>
                        <div className={`${styles.result} result-item`}>
                            <div className={styles.resultLabel}>
                                {language === 'en' ? 'MONTHLY LOSS' : 'PÉRDIDA MENSUAL'}
                            </div>
                            <div className={styles.resultValue}>
                                ${Math.round(monthlyLoss).toLocaleString()}
                            </div>
                        </div>
                        <div className={`${styles.result} ${styles.highlight} result-item`}>
                            <div className={styles.resultLabel}>
                                {language === 'en' ? 'ANNUAL LOSS' : 'PÉRDIDA ANUAL'}
                            </div>
                            <div className={styles.resultValue}>
                                ${Math.round(yearlyLoss).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
