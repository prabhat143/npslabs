import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
      className="flex items-center space-x-1 px-3 py-1 rounded-md bg-primary-100 hover:bg-primary-200 transition-colors"
    >
      <span className="text-sm font-medium text-primary-700">
        {language === 'en' ? 'తెలుగు' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;