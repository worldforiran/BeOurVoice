import styles from './App.module.css';
import Hashtags from './Hashtags';
import LanguageSelector from './LanguageSelector';
import usePersistedState from './usePersistedState';

interface IProps { };

export enum ELanguages {
  English = 'english',
  Persian = 'persian',
}

function App({ }: IProps) {
  const [language, setLanguage] = usePersistedState('bov-language', ELanguages.English);

  return (
    <div>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <Hashtags language={language} />
    </div>
  );
}

export default App;
