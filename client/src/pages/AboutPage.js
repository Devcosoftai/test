import React from 'react';
import About from '../components/About/About';
import Stats from '../components/Stats/Stats';
import Industries from '../components/Industries/Industries';
import CtaBanner from '../components/CtaBanner/CtaBanner';
import styles from './PageHeader.module.css';

const AboutPage = () => {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className={styles.inner}>
          <span className="section-tag">About DevCoSoft.ai</span>
          <h1 className="section-title">
            A Team Obsessed with <em>Building Great Products</em>
          </h1>
          <p className="section-sub">
            We're a modern technology startup combining full-stack development,
            cloud computing, and AI innovation to build future-ready digital products.
          </p>
        </div>
      </div>
      <Stats />
      <About />
      <Industries />
      <CtaBanner />
    </>
  );
};

export default AboutPage;
