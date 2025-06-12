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
      <div className={styles.waveWrapper}>
        <svg
          className={styles.wave}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
  fill="#7581a5"
  d="M0,192L80,197.3C160,203,320,213,480,213.3C640,213,800,203,960,197.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
/>
        </svg>
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
            <button
              className={`${styles.button} ${styles.secondaryButton}`}
              onClick={() => {
                const target = document.getElementById("product");
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </button>
          </div>
            
          {/* Stats */}
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
        </div>
      </div>
    </section>
  );
}