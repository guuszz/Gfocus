import React, { useState, memo } from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = memo(function LanguageSelector() {
  const { currentLang, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'en' as Language, label: 'English', flag: '🇺🇸' },
    { code: 'pt-BR' as Language, label: 'Português', flag: '🇧🇷' },
    { code: 'es' as Language, label: 'Español', flag: '🇪🇸' }
  ];

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-2 text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        <Globe size={20} />
        <span className="uppercase">{currentLang}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-50">
          <div className="py-1">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  currentLang === lang.code ? 'text-white bg-gray-800' : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <span className="mr-2">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default LanguageSelector;