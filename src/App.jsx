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
      <ProductSpotlight onSignUpClick={handleSignUpClick}/>
      {/*}
      <Features />
      <Products />
      <Testimonials />
      */}
       <Footer />
      <SignUpModal isOpen={isSignUpModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;

