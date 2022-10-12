import { createContext } from 'react';
import Hashtags from './Hashtags';
import LanguageSelector from './LanguageSelector';
import usePersistedState from './usePersistedState';
import Socials from './Socials';

interface IProps { };

export enum ELanguages {
  English = 'english',
  Persian = 'persian',
}

export const LocaleContext = createContext({
  language: ELanguages.English
})

function App({ }: IProps) {
  const [language, setLanguage] = usePersistedState('bov-language', ELanguages.English);

  return (
    <LocaleContext.Provider value={{ language }}>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <Hashtags language={language} />
      <Socials />
    </LocaleContext.Provider>
  );
}

export default App;
