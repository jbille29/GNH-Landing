import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  //{ icon: Twitter, href: '#', label: 'Twitter' }
];

const quickLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'FAQ', href: '#' }
];

const supportLinks = [
  { name: 'Help Center', href: '#' },
  { name: 'Shipping Info', href: '#' },
  { name: 'Returns', href: '#' },
  { name: 'Track Order', href: '#' }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandName}>
              Goodnight Honey
            </h3>
            <p className={styles.brandDescription}>
              Crafting premium snacks with natural ingredients and delivering happiness 
              to your doorstep. Join thousands of satisfied customers who trust us for 
              their snacking needs.
            </p>
            
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              {/*}
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span>(555) 123-4567</span>
              </div>
              */}
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span>hello@eatgoodnighthoney.com</span>
              </div>
              {/*}
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>123 Snack Street, Food City, FC 12345</span>
              </div>
              */}
            </div>
          </div>

          {/* Quick Links */}
          {/*}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className={styles.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          */}

          {/* Support */}
          {/*}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Support</h4>
            <ul className={styles.linksList}>
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className={styles.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          */}
        </div>
        
        {/* Newsletter Signup */}
        {/*}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterInfo}>
              <h4 className={styles.newsletterTitle}>Stay Updated</h4>
              <p className={styles.newsletterDescription}>Get the latest news and exclusive offers</p>
            </div>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterButton}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        */}
        {/* Newsletter Signup */}
        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          {/*
          <div className={styles.copyright}>
            © 2024 CraveBar. All rights reserved.
          </div>
          */}
          
          {/* Social Links */}
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={styles.socialLink}
              >
                <social.icon className={styles.socialIcon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}