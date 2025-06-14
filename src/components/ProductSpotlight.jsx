import React from 'react'
import styles from './ProductSpotlight.module.css'
import { Drumstick, Leaf, Flower, Sprout } from 'lucide-react'
import barImg from '../assets/bar1.png'

export default function ProductSpotlight({ onSignUpClick }) {
  return (
    <section id="product" className={styles.products}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Image */}
          <div className={styles.imageWrapper}>
            <img src={barImg} alt="GoodnightHoney Sleep Bar" className={styles.productImage} />
          </div>

          {/* Right: Text Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>Meet the Bar That Ends Your Day Right</h2>
            <p className={styles.description}>
              Introducing the <strong>Cinnamon Oat Sleep Bar</strong> — crafted to help you wind down naturally. With rolled oats, real honey, almond butter, chamomile, and ashwagandha. Low sugar, no caffeine, handmade small batches. Calm evenings, happier mornings.
            </p>
            <div className={styles.specs}>
              <div className={styles.spec}><Drumstick className={styles.specIcon} />9g Protein</div>
              <div className={styles.spec}><Leaf className={styles.specIcon} />5g Fiber</div>
              <div className={styles.spec}><Flower className={styles.specIcon} />Chamomile</div>
              <div className={styles.spec}><Sprout className={styles.specIcon} />Ashwagandha</div>
              <div className={styles.spec}><Leaf className={styles.specIcon} /><strong>3g Sugar</strong></div>
            </div>
            <blockquote className={styles.quote}>
              “It’s like a warm hug in bar form—helps me calm down without making me crash.”<br/>
              <cite>— Sarah, Madison WI</cite>
            </blockquote>
            <button className={styles.notifyButton} onClick={onSignUpClick}>
              Get a Sample • Limited Batches!
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
