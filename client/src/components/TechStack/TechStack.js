import React, { useEffect, useRef } from 'react';
import styles from './TechStack.module.css';
import { TECH_STACK } from '../../utils/data';

const TechStack = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    el.classList.add('reveal');
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Duplicate for seamless infinite loop
  const pills = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className={styles.techStack} id="stack">
      <div className={styles.header} ref={headerRef}>
        <span className="section-tag">Technology</span>
        <h2 className="section-title">Our <em>Tech Stack</em></h2>
      </div>

      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {pills.map((pill, i) => (
            <span key={i} className={styles.pill}>{pill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
