import React from 'react';
import Contact from '../components/Contact/Contact';
import styles from './PageHeader.module.css';

const ContactPage = () => {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className={styles.inner}>
          <span className="section-tag">Get In Touch</span>
          <h1 className="section-title">
            Let's Build Something <em>Incredible</em>
          </h1>
          <p className="section-sub">
            Have a project in mind? Fill out the form below and our team will
            get back to you within 24 hours.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
