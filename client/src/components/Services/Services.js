import React, { useEffect, useRef } from 'react';
import styles from './Services.module.css';
import { SERVICES } from '../../utils/data';

const ServiceCard = ({ icon, title, desc, items, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );

    el.classList.add('reveal');
    if (delay) el.style.transitionDelay = `${delay}s`;
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
      <ul className={styles.itemList}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

const Services = () => {
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

  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our <em>Core Services</em></h2>
          <p className="section-sub">
            End-to-end technology solutions tailored for startups, SMEs, and enterprises.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              {...service}
              delay={(i % 3) * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
