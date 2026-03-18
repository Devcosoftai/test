import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import { useButtonEffects } from '../../hooks/useButtonEffects';
import styles from './Hero.module.css';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const titleRef = useScrollReveal({ threshold: 0.15 });
  const contentRef = useScrollReveal({ threshold: 0.2 });
  const showcaseRef = useScrollReveal({ threshold: 0.1 });
  const orbsRef = useScrollReveal({ threshold: 0.25 });

  useButtonEffects();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rotateX = (clientY - centerY) / 25 + 'deg';
      const rotateY = (clientX - centerX) / -25 + 'deg';
      
      setMousePos({ x: (clientX - centerX) / 20, y: (clientY - centerY) / 20 });
      
      // Update CSS custom properties for global 3D tilt
      document.documentElement.style.setProperty('--mouse-x', rotateY);
      document.documentElement.style.setProperty('--mouse-y', rotateX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleLetters = "Building Scalable Digital Solutions with Modern Tech.".split('');



  return (
    <section className={styles.hero} id="hero" ref={contentRef}>
      {/* Background glows with parallax */}
      <div className={`${styles.glow1} ${styles.parallaxLayer}`} style={{ transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)` }} />
      <div className={`${styles.glow2} ${styles.parallaxLayer}`} style={{ transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)` }} />
      <div className={`${styles.glow3} ${styles.parallaxLayer}`} style={{ transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)` }} />
      <div className={`${styles.glow4} ${styles.parallaxLayer}`} style={{ transform: `translate(${mousePos.x * 0.08}px, ${mousePos.y * 0.08}px)` }} />
      <div className={`${styles.glow5} ${styles.parallaxLayer}`} style={{ transform: `translate(${mousePos.x * 0.12}px, ${mousePos.y * 0.12}px)` }} />

      {/* Floating animated shapes with enhanced parallax */}
      <div className={`${styles.shape1} ${styles.parallaxLayer}`} style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }} />
      <div className={`${styles.shape2} ${styles.parallaxLayer}`} style={{ transform: `translate(${mousePos.x * -0.25}px, ${mousePos.y * -0.25}px)` }} />
      <div className={`${styles.shape3} ${styles.parallaxLayer}`} style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }} />
      <div className={`${styles.shape4} ${styles.parallaxLayer}`} style={{ transform: `translate(${mousePos.x * -0.35}px, ${mousePos.y * -0.35}px)` }} />

      {/* Product Showcase - Apple Neo style 3D laptop */}
      <div className={`${styles.productShowcase} reveal`} ref={showcaseRef}>
        <div className={styles.laptop}>
          <div className={styles.screen}>
            <div className={styles.codeGlow} />
            <span>console.log("DevCoSoft.ai");</span>
          </div>
          <div className={styles.body} />
          <div className={styles.keyboard} />
        </div>
      </div>

      <div className={styles.content} style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          MERN · Cloud · AI · DevOps
        </div>

        {/* Letter-by-letter title */}
        <div className={styles.title} ref={titleRef}>
          {titleLetters.map((letter, i) => (
            <span 
              key={i} 
              className={`${styles.letter} ${styles.reveal}`} 
              style={{ 
                animationDelay: `${i * 0.05}s`,
                '--letter-delay': `${i * 0.05}s`
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>

        {/* Subheading */}
        <p className={styles.sub}>
          At DevCoSoft.ai, we design, develop, and deploy high-performance web,
          mobile, cloud, and AI-powered applications that help businesses grow
          faster and smarter.
        </p>

        {/* Feature Orbs */}
        <div className={`${styles.featureOrbs}`} ref={orbsRef}>
          <div className={`${styles.featureOrb} reveal reveal-delay-1`}>
            <div className={styles.orbIcon}>⚡</div>
            <span>Performance</span>
          </div>
          <div className={`${styles.featureOrb} reveal reveal-delay-2`}>
            <div className={styles.orbIcon}>🤖</div>
            <span>AI-Powered</span>
          </div>
          <div className={`${styles.featureOrb} reveal reveal-delay-3`}>
            <div className={styles.orbIcon}>☁️</div>
            <span>Cloud Native</span>
          </div>
        </div>

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
