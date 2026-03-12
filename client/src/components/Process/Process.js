import React, { useEffect, useRef } from 'react';
import styles from './Process.module.css';
import { PROCESS_STEPS } from '../../utils/data';

const Process = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el, i) => {
      if (el) {
        el.classList.add('reveal');
        if (i > 0) el.style.transitionDelay = `${i * 0.05}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <section className={styles.process} id="process">
      <div className={styles.inner}>
        <span className="section-tag" ref={addRef}>How We Work</span>
        <h2 className="section-title" ref={addRef}>
          Our <em>Development</em> Process
        </h2>
        <p className="section-sub" ref={addRef}>
          Agile methodology for fast, transparent, and high-quality delivery.
        </p>

        <div className={styles.stepsGrid} ref={addRef}>
          {PROCESS_STEPS.map((step) => (
            <div className={styles.step} key={step.num}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDesc}>{step.desc}</div>
            </div>
          ))}
        </div>

        <p className={styles.agileNote} ref={addRef}>
          We follow <strong>Agile methodology</strong> to ensure fast and transparent project delivery.
        </p>
      </div>
    </section>
  );
};

export default Process;
