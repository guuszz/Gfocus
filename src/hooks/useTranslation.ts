import { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

export const useTranslation = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('gfocus-language') as Language || 'en';
    setCurrentLang(savedLang);
  }, []);

  const changeLanguage = (newLang: Language) => {
    setCurrentLang(newLang);
    localStorage.setItem('gfocus-language', newLang);
  };

  const t = translations[currentLang];

  return { t, currentLang, changeLanguage };
};