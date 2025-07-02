import React, { createContext, useState, ReactNode, useContext } from 'react';

type Language = 'uz' | 'ru' | 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string; 
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    welcome: 'Xush kelibsiz',
    jobs: 'Ishlar',
    profile: 'Profil'
  },
  ru: {
    welcome: 'Добро пожаловать',
    jobs: 'Вакансии',
    profile: 'Профиль'
  },
  en: {
    welcome: 'Welcome',
    jobs: 'Jobs',
    profile: 'Profile'
  },
  jp: {
    welcome: 'ようこそ',
    jobs: '求人',
    profile: 'プロフィール'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'uz',
  setLanguage: () => {},
  t: (key) => key
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);