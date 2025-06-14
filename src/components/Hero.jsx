import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import styles from './Hero.module.css';
import logo from '../assets/gnh_logo.png';
import heroImg from '../assets/heroImg.jpg';


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
            d="M0,224L80,234.7C160,245,320,267,480,282.7C640,299,800,309,960,266.7C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      <div className={styles.container}>
        {/* Logo always centered at top */}
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Goodnight Honey" className={styles.logo} />
        </div>

        <div className={styles.content}>
          {/* Text section */}
          <div className={styles.text}>
            <h1 className={styles.heading}>
              Guilt-Free
              <span className={styles.headingAccent}>Snacks</span>
              <span className={styles.headingSubtitle}>To End the Day Right</span>
            </h1>
            <p className={styles.subtitle}>
              Low sugar. No caffeine. Calming ingredients. Just cozy, sleep-friendly flavor.
            </p>

            <div className={styles.ctaButtons}>
              <button onClick={onSignUpClick} className={`${styles.button} ${styles.primaryButton}`}>
                Get Started Today <ChevronRight className={styles.buttonIcon} />
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

          {/* Hero image */}
          <div className={styles.imageWrapper}>
            <div className={styles.heroClip}>
              <img src={heroImg} alt="Goodnight Honey bar" className={styles.heroImg} />
            </div>
          </div>
        </div>
      </div>

      

    </section>
  );
}