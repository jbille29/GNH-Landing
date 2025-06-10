import React, { useState } from 'react';
import { X, Mail, User, ArrowRight } from 'lucide-react';
import styles from './SignUpModal.module.css';

export default function SignUpModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferences: 'all'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Show success message or redirect
    alert('Thank you for signing up! Welcome to our snack community!');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        {/* Backdrop */}
        <div 
          className={styles.backdrop}
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className={styles.modal}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className={styles.closeButton}
          >
            <X className={styles.closeIcon} />
          </button>

          {/* Header */}
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <Mail className={styles.headerIcon} />
            </div>
            <h2 className={styles.title}>Join Our Community</h2>
            <p className={styles.subtitle}>Get exclusive access to new flavors and special offers</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name
              </label>
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
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
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

            <div className={styles.inputGroup}>
              <label htmlFor="preferences" className={styles.label}>
                Snack Preferences
              </label>
              <select
                id="preferences"
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="all">All Types</option>
                <option value="sweet">Sweet Snacks</option>
                <option value="savory">Savory Snacks</option>
                <option value="healthy">Healthy Options</option>
                <option value="vegan">Vegan Only</option>
              </select>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
            >
              Sign Me Up
              <ArrowRight className={styles.submitIcon} />
            </button>
          </form>

          {/* Footer */}
          <p className={styles.footer}>
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}