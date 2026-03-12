import React, { useEffect, useRef } from 'react';
import styles from './Industries.module.css';
import { INDUSTRIES } from '../../utils/data';

const Industries = () => {
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
        if (i > 1) el.style.transitionDelay = `${(i - 2) * 0.07}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <section className={styles.industries} id="industries">
      <div className={styles.inner}>
        <span className="section-tag" ref={addRef}>Industries</span>
        <h2 className="section-title" ref={addRef}>
          Industries <em>We Serve</em>
        </h2>
        <p className="section-sub" ref={addRef}>
          Domain expertise across the world's fastest-growing sectors.
        </p>

        <div className={styles.grid}>
          {INDUSTRIES.map((industry) => (
            <div className={styles.card} key={industry.name} ref={addRef}>
              <span className={styles.cardIcon}>{industry.icon}</span>
              <span className={styles.cardName}>{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
