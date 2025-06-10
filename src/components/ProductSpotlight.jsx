import React from 'react';
import styles from './ProductSpotlight.module.css';

export default function ProductSpotlight({ onSignUpClick }) {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Meet the GoodnightHoney Bar
          </h2>
          <p className={styles.subtitle}>
            Our first evening snack is almost here. Packed with protein, calming herbs, and just the right touch of sweetness—it's made for winding down.
          </p>
        </div>

        <div className={styles.spotlight}>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="GoodnightHoney Sleep Bar"
              className={styles.productImage}
            />
          </div>
          <div className={styles.productInfo}>
            <h3 className={styles.productName}>The GoodnightHoney Sleep Bar</h3>
            <p className={styles.productDescription}>
              9g of protein • 5g of fiber • calming herbs like chamomile and ashwagandha  
              <br /><br />
              No fillers. No junk. Just real ingredients for real rest.
            </p>
            <button className={styles.notifyButton} onClick={onSignUpClick}>
              Notify Me When It’s Ready
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
