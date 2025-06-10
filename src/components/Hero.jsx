import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import styles from './Hero.module.css';
import logo from '../assets/gnh_logo.png';

export default function Hero({ onSignUpClick }) {
  return (
    <section className={styles.hero}>
      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
        
        <img src={logo} alt="Goodnight Honey" className={styles.logo} />
       

          {/* Main Heading */}
          <h1 className={styles.heading}>
            Guilt-Free
            <span className={styles.headingAccent}>
              Snacks
            </span>
            <span className={styles.headingSubtitle}>
              To End the Day Right
            </span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Goodnight Honey makes snacks designed for the evening—simple, cozy treats made with calming ingredients like chamomile and ashwagandha.  
No junk, no stress—just a little something to help you slow down after a long day.


          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <button
              onClick={onSignUpClick}
              className={`${styles.button} ${styles.primaryButton}`}
            >
              Get Started Today
              <ChevronRight className={styles.buttonIcon} />
            </button>
            <button className={`${styles.button} ${styles.secondaryButton}`}>
              View Menu
            </button>
          </div>
            
          {/* Stats */}
          {/*
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10k+</div>
              <div className={styles.statLabel}>Happy Customers</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Unique Flavors</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>99%</div>
              <div className={styles.statLabel}>Satisfaction Rate</div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}