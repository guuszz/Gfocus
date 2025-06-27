import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface LanguageContextType {
  currentLang: Language;
  changeLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('gfocus-language') as Language;
      if (savedLang && ['en', 'pt-BR', 'es'].includes(savedLang)) {
        setCurrentLang(savedLang);
      }
    } catch (error) {
      console.warn('Failed to load language from localStorage:', error);
    }
    setIsLoaded(true);
  }, []);

  const changeLanguage = (newLang: Language) => {
    setCurrentLang(newLang);
    try {
      localStorage.setItem('gfocus-language', newLang);
    } catch (error) {
      console.warn('Failed to save language to localStorage:', error);
    }
  };

  // Garantir que temos traduções válidas
  const t = translations[currentLang] || translations.en;

  if (!isLoaded) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook separado para evitar problemas de Fast Refresh
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 