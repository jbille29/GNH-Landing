import React from 'react';
import styles from './ProductSpotlight.module.css';
import { Drumstick, Leaf, Flower, Sprout } from 'lucide-react';

import barImg from '../assets/bar1.png';

export default function ProductSpotlight({ onSignUpClick }) {
  return (
    <section id="product" className={styles.products}>
      <div className={styles.container}>

        <div className={styles.imageWrapper}>
          <img 
            src={barImg}
            alt="GoodnightHoney Sleep Bar"
            className={styles.productImage}
          />
        </div>

        <div className={styles.specs}>
          <div className={styles.spec}>
            <Drumstick className={styles.specIcon} />
            9g Protein
          </div>
          <div className={styles.spec}>
            <Leaf className={styles.specIcon} />
            5g Fiber
          </div>
          <div className={styles.spec}>
            <Flower className={styles.specIcon} />
            Chamomile
          </div>
          <div className={styles.spec}>
            <Sprout className={styles.specIcon} />
            Ashwagandha
          </div>
        </div>

        <div className={styles.desire}>
          <h2 className={styles.title}>Your New Nighttime Ritual</h2>
          <p className={styles.description}>
            The GoodnightHoney Bar is made to help you wind down — naturally. Real ingredients, cozy flavor, and a calming blend of herbs. Sleepy never tasted so good.
          </p>
        </div>

        <button className={styles.notifyButton} onClick={onSignUpClick}>
          Notify Me When It’s Ready
        </button>

      </div>
    </section>

  );
}
