'use client';

// my-portfolio/contexts/LanguageContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('fa');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('language') : null;
    if (saved === 'fa' || saved === 'en') setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    window.localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => setLanguageState((prev) => (prev === 'fa' ? 'en' : 'fa'));

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageState, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
