import React from 'react';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Food Blogger',
    content: 'These snacks are absolutely incredible! The quality and taste exceed all my expectations. I\'ve tried many brands, but nothing comes close.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Mike Chen',
    role: 'Fitness Enthusiast',
    content: 'Perfect for my active lifestyle! Clean ingredients, great taste, and the perfect portion sizes. These have become my go-to post-workout snack.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Emily Davis',
    role: 'Busy Mom',
    content: 'Finally, healthy snacks that my kids actually love! The convenience and quality make snack time stress-free. Highly recommend to all parents.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            What Our Customers Say
          </h2>
          <p className={styles.subtitle}>
            Don't just take our word for it. Here's what real customers have to say about our snacks.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <Quote className={styles.quoteIcon} />
              
              <div className={styles.customerInfo}>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                <div className={styles.customerDetails}>
                  <h4 className={styles.customerName}>{testimonial.name}</h4>
                  <p className={styles.customerRole}>{testimonial.role}</p>
                </div>
              </div>

              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={styles.star} />
                ))}
              </div>

              <p className={styles.testimonialContent}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}