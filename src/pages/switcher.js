import React from 'react';
import { useTranslation } from 'react-i18next';

function Switcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    i18n.on('languageChanged', (lng) => {
        console.log('Language changed to:', lng);
    });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('es')}>ES</button>
    </div>
  );
}

export default Switcher;