import React from 'react';
import styles from './App.module.css';

interface IProps {};

function App({}: IProps) {
  return (
    <div>
      <h1 className={styles.Title}>
        Let's End This Together,
        <br />#BeOurVoice for <a href="https://twitter.com/hashtag/MahsaAmini">#MahsaAmini</a>!</h1>
    </div>
  );
}

export default App;
