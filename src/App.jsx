import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import SignUpModal from './components/SignUpModal';
import Footer from './components/Footer';
import styles from './App.module.css';
import ProductSpotlight from './components/ProductSpotlight';

function App() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <div className={styles.app}>
      <Hero onSignUpClick={handleSignUpClick} />
      <Features />
      <ProductSpotlight onSignUpClick={handleSignUpClick}/>
      {/*
      <Products />
      <Testimonials />
      */}
      <Footer />
      <SignUpModal isOpen={isSignUpModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
  /*
  return (
    <form onSubmit={handleSubmit}>
      <h2>Subscribe</h2>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  );
  */
