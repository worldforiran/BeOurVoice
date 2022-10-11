import cx from 'classnames';
import styles from './Hashtags.module.css';

import list from './hashtagList';
import { useCallback, useState } from 'react';
import { ELanguages } from '../App';
import useLocale from '../hooks/useLocale';

interface IProps {
  language: ELanguages;
};

const randomize = () => Math.random() > 0.5 ? 1 : -1;

function Hashtags({ language }: IProps) {
  const { _ } = useLocale()
  const [copied, setCopied] = useState(false);

  const hashtags = list[language].sort(randomize);

  const copy = useCallback(() => {
    const text = hashtags.map(hashtag => '#' + hashtag).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [hashtags]);

  return (
    <div className={cx(styles.Hashtags, {
      [styles.RTL]: language === ELanguages.Persian,
    })}>
      <ul className={styles.HashtagList}>
        {hashtags.map((hashtag: string, index: number) => (
          <li key={index}>
            #{hashtag}
          </li>
        ))}
      </ul>
      <div className={cx(styles.CopyButton, {
        [styles.CopyButtonCopied]: copied
      })} onClick={copy}>
        {copied ? _('COPIED') : _('COPY')}
      </div>
    </div>
  );
}

export default Hashtags;
