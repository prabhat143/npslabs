import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TestingDetails from './components/TestingDetails';
import Equipment from './components/Equipment';
import ValuePropositions from './components/ValuePropositions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  useEffect(() => {
    document.title = "NSP Analytical Labs - Seafood Quality Assurance";
  }, []);
  
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Services />
        <TestingDetails />
        <Equipment />
        <ValuePropositions />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;