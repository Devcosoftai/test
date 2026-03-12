import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      {/* Background glows */}
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className={styles.glow3} />
      <div className={styles.glow4} />
      <div className={styles.glow5} />

      {/* Floating animated shapes */}
      <div className={styles.shape1} />
      <div className={styles.shape2} />
      <div className={styles.shape3} />
      <div className={styles.shape4} />

      <div className={styles.content}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          MERN · Cloud · AI · DevOps
        </div>

        {/* Headline */}
        <h1 className={styles.title}>
          Building Scalable
          <span className={styles.titleAccent}>Digital Solutions</span>
          with Modern Tech.
        </h1>

        {/* Subheading */}
        <p className={styles.sub}>
          At DevCoSoft.ai, we design, develop, and deploy high-performance web,
          mobile, cloud, and AI-powered applications that help businesses grow
          faster and smarter.
        </p>

        {/* CTA Buttons */}
        <div className={styles.buttons}>
          <Link to="/contact" className="btn-primary">
            <span>Get Free Consultation</span>
            <span>→</span>
          </Link>
          <Link to="/services" className="btn-outline">
            Explore Services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;
