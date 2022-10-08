import React from 'react';
import cx from 'classnames';
import styles from './LanguageSelector.module.css';
import { ELanguages } from '../App';

interface IProps {
  language: ELanguages;
  setLanguage: (language: ELanguages) => void;
};

function LanguageSelector({ language, setLanguage }: IProps) {
  const text = language === ELanguages.English ? 'نمایش هشتگ‌های فارسی' : 'Show English Hashtags';

  const switchLanguage = () => {
    setLanguage(language === ELanguages.English ? ELanguages.Persian : ELanguages.English);
  };

  return (
    <div className={styles.LanguageSelector} onClick={switchLanguage}>
      { text }
    </div>
  );
}

export default LanguageSelector;
