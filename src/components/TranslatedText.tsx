import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface TranslatedTextProps {
  text: string;
  className?: string;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({ text, className }) => {
  const { t, language } = useLanguage();
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    const translate = async () => {
      const translated = await t(text);
      setTranslatedText(translated);
    };

    if (language === 'te') {
      translate();
    } else {
      setTranslatedText(text);
    }
  }, [text, language, t]);

  return <span className={className}>{translatedText}</span>;
};

export default TranslatedText