import React, { useState, useEffect } from 'react';
import { Menu, X, FlaskRound as Flask } from 'lucide-react';
import { navItems } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import TranslatedText from './TranslatedText';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <Flask size={32} className="text-primary-500" />
          <span className="text-xl font-bold text-gray-900">NSP Labs</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            >
              <TranslatedText text={item.label} />
            </a>
          ))}
          <LanguageToggle />
          <a 
            href="#contact" 
            className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
          >
            <TranslatedText text="Contact Us" />
          </a>
        </div>

        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                <TranslatedText text={item.label} />
              </a>
            ))}
            <LanguageToggle />
            <a 
              href="#contact" 
              className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              <TranslatedText text="Contact Us" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;