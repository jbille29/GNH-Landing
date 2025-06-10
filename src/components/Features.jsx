import React from 'react';
import { Leaf, Clock, Sparkles, Scale } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: Leaf,
    title: 'Real Ingredients',
    description: 'No junk, no fillers—just real food you can feel good about, made with all-natural ingredients.'
  },
  {
    icon: Clock,
    title: 'Evening-Friendly',
    description: 'Satisfies late-night cravings without the sugar spike—perfect for winding down, not revving up.'
  },
  {
    icon: Scale,
    title: 'Balanced & Thoughtful',
    description: 'Crafted with 9g of protein, 5g of fiber, and only 10g of sugar to keep you satisfied—not wired.'
  },
  {
    icon: Sparkles,
    title: 'Calming by Nature',
    description: 'Warm spices and calming herbs like maca, ashwagandha, and cinnamon—bedtime vibes, built in.'
  }
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Why Makes Goodnight Honey Different?
          </h2>
          <p className={styles.subtitle}>
            These aren’t just any snacks—they’re crafted for your evenings, with real ingredients and a little extra care. 
  Here’s what sets us apart.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <feature.icon className={styles.icon} />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}