import { useState } from 'react';
import styles from './App.module.css';
import Hashtags from './Hashtags';
import LanguageSelector from './LanguageSelector';

interface IProps { };

export enum ELanguages {
  English = 'english',
  Persian = 'persian',
}

function App({ }: IProps) {
  const [language, setLanguage] = useState<ELanguages>(ELanguages.English);

  return (
    <div>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <Hashtags />
    </div>
  );
}

export default App;
