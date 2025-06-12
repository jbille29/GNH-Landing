// src/components/SignUpModal.jsx
import React, { useState } from 'react';
import ReactMailchimpSubscribe from 'react-mailchimp-subscribe';
import { X, Mail, User, ArrowRight } from 'lucide-react';
import styles from './SignUpModal.module.css';

// Replace with your Mailchimp embed/form URL (from the "Embedded forms" section)
const MAILCHIMP_URL =
  "https://eatgoodnighthoney.us8.list-manage.com/subscribe/post-json?u=f3f661adf1bbed631ca31004a&id=f027d72c3e";


export default function SignUpModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', preferences: 'all' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.backdrop} onClick={onClose}></div>
        <div className={styles.modal}>
          <button onClick={onClose} className={styles.closeButton}>
            <X className={styles.closeIcon} />
          </button>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <Mail className={styles.headerIcon} />
            </div>
            <h2 className={styles.title}>Join Our Community</h2>
            <p className={styles.subtitle}>Get exclusive access to new flavors and special offers</p>
          </div>

          {!submitted ? (
            <ReactMailchimpSubscribe
              url={MAILCHIMP_URL}
              render={({ subscribe, status, message }) => (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    subscribe({
                      EMAIL: formData.email,
                      FNAME: formData.name,
                      MERGE2: formData.preferences,
                    });
                  }}

                  className={styles.form}
                >
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>First Name</label>
                    <div className={styles.inputWrapper}>
                      <User className={styles.inputIcon} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <div className={styles.inputWrapper}>
                      <Mail className={styles.inputIcon} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  

                  <button type="submit" className={styles.submitButton}>
                    Sign Me Up
                    <ArrowRight className={styles.submitIcon} />
                  </button>
                  {status === 'sending' && <p>Sending...</p>}
                  {status === 'error' && <p dangerouslySetInnerHTML={{ __html: message }} />}
                  {status === 'success' && <p>Thanks for subscribing!</p>}

                </form>
              )}
            />
          ) : (
            <div className={styles.successMessage}>
              <h3>Thank you for signing up!</h3>
              <p>Welcome to our snack community. Stay tuned for updates.</p>
              <button onClick={onClose} className={styles.closeButton}>Close</button>
            </div>
          )}

          <p className={styles.footer}>
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
