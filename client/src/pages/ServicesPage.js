import React from 'react';
import Services from '../components/Services/Services';
import Process from '../components/Process/Process';
import TechStack from '../components/TechStack/TechStack';
import CtaBanner from '../components/CtaBanner/CtaBanner';
import styles from './PageHeader.module.css';

const ServicesPage = () => {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className={styles.inner}>
          <span className="section-tag">Our Services</span>
          <h1 className="section-title">
            Everything You Need to <em>Build & Scale</em>
          </h1>
          <p className="section-sub">
            From full-stack development to AI automation — we cover every layer
            of your technology stack with expert precision.
          </p>
        </div>
      </div>
      <Services />
      <Process />
      <TechStack />
      <CtaBanner />
    </>
  );
};

export default ServicesPage;
