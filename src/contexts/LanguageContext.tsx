import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: string) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [cache, setCache] = useState<Record<string, string>>({});

  const t = async (text: string): Promise<string> => {
    if (language === 'en') return text;
    
    const cacheKey = `${language}:${text}`;
    if (cache[cacheKey]) return cache[cacheKey];

    try {
      const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=te&dt=t&q=${encodeURIComponent(text)}`);
      const data = await response.json();
      const translation = data[0][0][0];
      
      setCache(prev => ({ ...prev, [cacheKey]: translation }));
      return translation;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};