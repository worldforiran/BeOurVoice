import styles from './LanguageSelector.module.css';
import { ELanguages } from '@/App';
import useLocale from '@/hooks/useLocale';

interface IProps {
  language: ELanguages;
  setLanguage: (language: ELanguages) => void;
};

function LanguageSelector({ language, setLanguage }: IProps) {
  const { _ } = useLocale()

  const switchLanguage = () => {
    setLanguage(language === ELanguages.English ? ELanguages.Persian : ELanguages.English);
  };

  return (
    <div className={styles.LanguageSelector} onClick={switchLanguage}>
      { _('SHOW_OTHER_LANGUAGE') }
    </div>
  );
}

export default LanguageSelector;
